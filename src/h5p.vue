<template>
  <div v-if="loading">
    <slot/>
  </div>
  <div v-else-if="getJSONErrorResponse">
    <slot name="404" :response="getJSONErrorResponse"/>
  </div>
  <iframe v-else ref="iframe" style="width: 100%; height: 100%; border: none;" :srcdoc="srcdoc" @load="addEventHandlers"/>
</template>

<script>
import l10n from './l10n'
// eslint-disable-next-line
import frameScript from '!raw-loader!../frame/frame'
// eslint-disable-next-line
import frameStyle from '!to-string-loader!css-loader!../vendor/h5p/styles/h5p.css'
import Toposort from 'toposort-class'

export default {
  name: 'h5p',
  props: {
    src: {
      type: String,
      required: true
    },
    displayOptions: {
      type: Object,
      default: () => {
        return {
          frame: true,
          export: true,
          embed: true,
          copyright: true,
          icon: true
        }
      }
    },
    l10n: {
      type: Object,
      default: () => { return {} }
    },
    contentId: {
      type: [String, Number],
      default: 1
    }
  },
  data () {
    return {
      mainLibrary: undefined,
      h5pIntegration: { l10n: { H5P: {} } },
      started: false,
      loading: true,
      getJSONErrorResponse: undefined,
      srcdoc: ''
    }
  },
  computed: {
    path () {
      return this.src.slice(this.src.length - 1) === '/' ? this.src.substring(0, this.src.length - 1) : this.src
    },
    contentStyles () {
      return this.h5pIntegration.contents['cid-' + this.contentId].styles
    },
    contentScripts () {
      return this.h5pIntegration.contents['cid-' + this.contentId].scripts
    },
    head () {
      // workaround for vue-loader parsing this as the end of our SFC's script block
      const endScript = '</' + 'script>'

      const styleTags = [
        `<style>${frameStyle}</style>`,
        ...this.contentStyles.map(style => {
          return `<link rel="stylesheet" href="${style}">`
        })
      ]

      const scriptTags = [
        `<script>H5PIntegration = ${JSON.stringify(this.h5pIntegration)};${endScript}`,
        `<script>${frameScript}${endScript}`,
        ...this.contentScripts.map(script => {
          return `<script src="${script}">${endScript}`
        })
      ]

      return [
        '<head>',
        '<base target="_parent">',
        ...styleTags,
        ...scriptTags,
        '</head>'
      ]
    }
  },
  async mounted () {
    let content
    let dependencies
    try {
      this.h5p = await this.getJSON(`${this.path}/h5p.json`)
      content = await this.getJSON(`${this.path}/content/content.json`)
      this.h5pIntegration.pathIncludesVersion = this.pathIncludesVersion = await this.checkIfPathIncludesVersion()
      this.mainLibrary = await this.findMainLibrary()
      dependencies = await this.findAllDependencies()
    } catch (e) {
      if (e.message === '404') {
        this.loading = false
        return
      } else {
        throw e
      }
    }

    const { styles, scripts } = this.sortDependencies(dependencies)

    this.h5pIntegration.url = this.path
    this.h5pIntegration.contents = this.h5pIntegration.contents || {}

    this.h5pIntegration.contents[`cid-${this.contentId}`] = {
      library: `${this.mainLibrary.machineName} ${this.mainLibrary.majorVersion}.${this.mainLibrary.minorVersion}`,
      jsonContent: JSON.stringify(content),
      styles: styles,
      scripts: scripts,
      displayOptions: this.displayOptions
    }

    Object.assign(this.h5pIntegration.l10n.H5P, l10n.H5P, this.l10n)

    this.srcdoc = [
      '<!doctype html><html class="h5p-iframe">',
      ...this.head,
      `<body><div class="h5p-content" data-content-id="${this.contentId}"/></body></html>`
    ].join('')

    this.loading = false
  },
  methods: {
    addEventHandlers () {
      this.$refs.iframe.contentWindow.H5P.externalDispatcher.on('*', (ev) => {
        this.$emit(ev.type.toLowerCase(), ev.data)
      })
    },
    async getJSON (url) {
      const resp = await fetch(url, { credentials: 'include' })
      if (resp.status === 404) {
        this.getJSONErrorResponse = resp
        throw new Error(404)
      }
      const json = await resp.json()
      return json
    },
    async checkIfPathIncludesVersion () {
      const dependency = this.h5p.preloadedDependencies[0]
      const machinePath = dependency.machineName + '-' + dependency.majorVersion + '.' + dependency.minorVersion

      let pathIncludesVersion

      try {
        await fetch(`${this.path}/${machinePath}/library.json`, { credentials: 'include', method: 'head' })
        pathIncludesVersion = true
      } catch (e) {
        pathIncludesVersion = false
      }
      return pathIncludesVersion
    },
    findMainLibrary () {
      const mainLibraryInfo = this.h5p.preloadedDependencies.find(dep => dep.machineName === this.h5p.mainLibrary)

      this.mainLibraryPath = this.h5p.mainLibrary + (this.pathIncludesVersion ? '-' + mainLibraryInfo.majorVersion + '.' + mainLibraryInfo.minorVersion : '')
      return this.getJSON(`${this.path}/${this.mainLibraryPath}/library.json`)
    },
    findAllDependencies () {
      const directDependencyNames = this.h5p.preloadedDependencies.map(dependency => this.libraryPath(dependency))

      return this.loadDependencies(directDependencyNames, [])
    },
    libraryPath (library) {
      return library.machineName + (this.pathIncludesVersion ? '-' + library.majorVersion + '.' + library.minorVersion : '')
    },
    async loadDependencies (toFind, alreadyFound) {
      const dependencies = alreadyFound
      const findNext = []
      const newDependencies = await Promise.all(toFind.map((libraryName) => this.findLibraryDependencies(libraryName)))
      // loop over newly found libraries
      newDependencies.forEach((library) => {
        // push into found list
        dependencies.push(library)
        // check if any dependencies haven't been found yet
        library.dependencies.forEach((dependency) => {
          if (!dependencies.find((foundLibrary) => foundLibrary.libraryPath === dependency) && !newDependencies.find((foundLibrary) => foundLibrary.libraryPath === dependency)) {
            findNext.push(dependency)
          }
        })
      })

      if (findNext.length > 0) {
        return this.loadDependencies(findNext, dependencies)
      }
      return dependencies
    },
    async findLibraryDependencies (libraryName) {
      const library = await this.getJSON(`${this.path}/${libraryName}/library.json`)
      const libraryPath = this.libraryPath(library)

      let dependencies = []
      if (library.preloadedDependencies) {
        dependencies = library.preloadedDependencies.map(dependency => this.libraryPath(dependency))
      }

      return { libraryPath, dependencies, preloadedCss: library.preloadedCss, preloadedJs: library.preloadedJs }
    },
    sortDependencies (dependencies) {
      const dependencySorter = new Toposort()
      const CSSDependencies = {}
      const JSDependencies = {}

      dependencies.forEach(dependency => {
        dependencySorter.add(dependency.libraryPath, dependency.dependencies)

        if (dependency.preloadedCss) {
          CSSDependencies[dependency.libraryPath] = CSSDependencies[dependency.libraryPath] ? CSSDependencies[dependency.libraryPath] : []
          dependency.preloadedCss.forEach(style => {
            CSSDependencies[dependency.libraryPath].push(`${this.path}/${dependency.libraryPath}/${style.path}`)
          })
        }

        if (dependency.preloadedJs) {
          JSDependencies[dependency.libraryPath] = JSDependencies[dependency.libraryPath] ? JSDependencies[dependency.libraryPath] : []
          dependency.preloadedJs.forEach(script => {
            JSDependencies[dependency.libraryPath].push(`${this.path}/${dependency.libraryPath}/${script.path}`)
          })
        }
      })

      const styles = []
      const scripts = []

      dependencySorter.sort().reverse().forEach(function (dependencyName) {
        Array.prototype.push.apply(styles, CSSDependencies[dependencyName])
        Array.prototype.push.apply(scripts, JSDependencies[dependencyName])
      })

      if (this.mainLibrary.preloadedCss) {
        Array.prototype.push.apply(styles, this.mainLibrary.preloadedCss.map(style => `${this.path}/${this.mainLibraryPath}/${style.path}`))
      }
      if (this.mainLibrary.preloadedJs) {
        Array.prototype.push.apply(scripts, this.mainLibrary.preloadedJs.map(script => `${this.path}/${this.mainLibraryPath}/${script.path}`))
      }
      return { styles, scripts }
    }
  }
}
</script>
