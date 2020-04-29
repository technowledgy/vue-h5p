<template>
  <div v-if="loading">
    <slot/>
  </div>
  <div v-else-if="getJSONErrorResponse">
    <slot name="error" :response="getJSONErrorResponse"/>
  </div>
  <iframe v-else ref="iframe" style="width: 100%; height: 100%; border: none;" :srcdoc="srcdoc" @load="addEventHandlers"/>
</template>

<script>
import l10n from './l10n'
// eslint-disable-next-line import/no-webpack-loader-syntax
import frameScript from '!raw-loader!../frame/frame'
// eslint-disable-next-line import/no-webpack-loader-syntax
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
      default: () => ({})
    },
    l10n: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      mainLibrary: undefined,
      loading: true,
      getJSONErrorResponse: undefined,
      srcdoc: ''
    }
  },
  computed: {
    path () {
      return this.src.slice(this.src.length - 1) === '/' ? this.src.substring(0, this.src.length - 1) : this.src
    }
  },
  async mounted () {
    let content
    let dependencies
    const h5pIntegration = { l10n: { H5P: {} } }

    try {
      const h5p = await this.getJSON(`${this.path}/h5p.json`)
      content = await this.getJSON(`${this.path}/content/content.json`)
      h5pIntegration.pathIncludesVersion = this.pathIncludesVersion = await this.checkIfPathIncludesVersion(h5p)
      this.mainLibrary = await this.findMainLibrary(h5p)
      dependencies = await this.findAllDependencies(h5p)
    } catch (e) {
      if (e.message === '404') {
        this.loading = false
        return
      } else {
        throw e
      }
    }

    const { styles, scripts } = this.sortDependencies(dependencies)

    h5pIntegration.url = this.path
    h5pIntegration.contents = h5pIntegration.contents || {}

    h5pIntegration.contents['cid-default'] = {
      library: `${this.mainLibrary.machineName} ${this.mainLibrary.majorVersion}.${this.mainLibrary.minorVersion}`,
      jsonContent: JSON.stringify(content),
      styles: styles,
      scripts: scripts,
      displayOptions: this.displayOptions
    }

    Object.assign(h5pIntegration.l10n.H5P, l10n.H5P, this.l10n)

    this.srcdoc = [
      '<!doctype html><html class="h5p-iframe">',
      ...this.getHead(h5pIntegration),
      '<body><div class="h5p-content" data-content-id="default"/></body></html>'
    ].join('')

    this.loading = false
  },
  methods: {
    getHead (h5pIntegration) {
      // workaround for vue-loader parsing this as the end of our SFC's script block
      const endScript = '</' + 'script>'

      const contentStyles = h5pIntegration.contents['cid-default'].styles
      const contentScripts = h5pIntegration.contents['cid-default'].scripts

      const styleTags = [
        `<style>${frameStyle}</style>`,
        ...contentStyles.map(style => {
          return `<link rel="stylesheet" href="${style}">`
        })
      ]

      const scriptTags = [
        `<script>H5PIntegration = ${JSON.stringify(h5pIntegration)};${endScript}`,
        `<script>${frameScript}${endScript}`,
        ...contentScripts.map(script => {
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
    },
    addEventHandlers () {
      this.$refs.iframe.contentWindow.H5P.externalDispatcher.on('*', (ev) => {
        this.$emit(ev.type.toLowerCase(), ev.data)
      })
    },
    async getJSON (url) {
      const resp = await fetch(url, { credentials: 'include' })
      if (!resp.ok) {
        this.getJSONErrorResponse = resp
        throw new Error(resp.status)
      }
      const json = await resp.json()
      return json
    },
    async checkIfPathIncludesVersion (h5p) {
      const dependency = h5p.preloadedDependencies[0]
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
    findMainLibrary (h5p) {
      const mainLibraryInfo = h5p.preloadedDependencies.find(dep => dep.machineName === h5p.mainLibrary)

      this.mainLibraryPath = h5p.mainLibrary + (this.pathIncludesVersion ? '-' + mainLibraryInfo.majorVersion + '.' + mainLibraryInfo.minorVersion : '')
      return this.getJSON(`${this.path}/${this.mainLibraryPath}/library.json`)
    },
    findAllDependencies (h5p) {
      const directDependencyNames = h5p.preloadedDependencies.map(dependency => this.libraryPath(dependency))

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
      for (const dependency of dependencies) {
        dependencySorter.add(dependency.libraryPath, dependency.dependencies)
      }
      const sortedDependencies = dependencySorter.sort().reverse()

      const CSSDependencies = {}
      const JSDependencies = {}

      dependencies.forEach(dependency => {
        CSSDependencies[dependency.libraryPath] = (dependency.preloadedCss || []).map(style => `${this.path}/${dependency.libraryPath}/${style.path}`)

        JSDependencies[dependency.libraryPath] = (dependency.preloadedJs || []).map(script => `${this.path}/${dependency.libraryPath}/${script.path}`)
      })

      const styles = [
        sortedDependencies.map(name => CSSDependencies[name]),
        (this.mainLibrary.preloadedCss || []).map(style => `${this.path}/${this.mainLibraryPath}/${style.path}`)
      ].flat(2).filter(Boolean)

      const scripts = [
        sortedDependencies.map(name => JSDependencies[name]),
        (this.mainLibrary.preloadedJs || []).map(script => `${this.path}/${this.mainLibraryPath}/${script.path}`)
      ].flat(2).filter(Boolean)

      return { styles, scripts }
    }
  }
}
</script>
