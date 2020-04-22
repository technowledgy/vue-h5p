<template>
  <div class="h5p-iframe-wrapper">
    <iframe :id="'h5p-iframe-' + id" class="h5p-iframe" :data-content-id="id" src="about:blank" frameBorder="0"/>
  </div>
</template>

<script>
import h5pIntegration from './integration'
import H5P from 'H5P'
// TODO: how to get rid of these (need to be included for frame.bundle)?
import 'H5PEventDispatcher'
import 'H5PxAPI'
import 'H5PxAPIEvent'
import 'H5PContentType'
import 'H5PConfirmationDialog'
import 'H5PRequestQueue'
import 'H5PActionBar'
import Toposort from 'toposort-class'

H5P.preventInit = true

export default {
  name: 'h5p',
  props: {
    src: {
      type: String,
      required: true
    },
    displayOptions: {
      type: Object,
      default: () => { return {} }
    },
    frame: {
      type: String,
      required: true
    }
  },
  data () {
    /* TODO: check if we need this */
    return {
      id: Math.random().toString(36).substr(2, 9),
      h5p: undefined,
      mainLibrary: undefined
    }
  },
  computed: {
    path () {
      return this.src.slice(this.src.length - 1) === '/' ? this.src.substring(0, this.src.length - 1) : this.src
    },
    h5pIntegration () {
      return h5pIntegration
    },
    framePath () {
      return this.frame.slice(this.frame.length - 1) === '/' ? this.frame.substring(0, this.frame.length - 1) : this.frame
    },
    frameJs () {
      return [this.frame, 'frame.bundle.js'].join('/')
    },
    frameCss () {
      return [this.frame, 'styles', 'h5p.css'].join('/')
    }
  },
  methods: {
    async getJSON (url) {
      /* TODO: check how to handle 404 */
      try {
        const resp = await fetch(url, { credentials: 'include' })
        const json = await resp.json()
        return json
      } catch (e) {
        // eslint-disable-next-line
        console.error(e)
      }
    },
    async initH5P () {
      this.h5p = await this.getJSON(`${this.path}/h5p.json`)
      const content = await this.getJSON(`${this.path}/content/content.json`)
      this.h5pIntegration.pathIncludesVersion = this.pathIncludesVersion = await this.checkIfPathIncludesVersion()

      this.mainLibrary = await this.findMainLibrary()

      const dependencies = await this.findAllDependencies()

      const { styles, scripts } = this.sortDependencies(dependencies)

      this.h5pIntegration.url = this.path
      this.h5pIntegration.contents = this.h5pIntegration.contents || {}
      this.h5pIntegration.core = {
        styles: [this.frameCss],
        scripts: [this.frameJs]
      }

      this.h5pIntegration.contents[`cid-${this.id}`] = {
        library: `${this.mainLibrary.machineName} ${this.mainLibrary.majorVersion}.${this.mainLibrary.minorVersion}`,
        jsonContent: JSON.stringify(content),
        styles: styles,
        scripts: scripts,
        displayOptions: this.displayOptions
      }
      // console.log(H5P)
      H5P.init()
    },
    async checkIfPathIncludesVersion () {
      const dependency = this.h5p.preloadedDependencies[0]
      const machinePath = dependency.machineName + '-' + dependency.majorVersion + '.' + dependency.minorVersion

      let pathIncludesVersion

      try {
        await this.getJSON(`${this.path}/${machinePath}/library.json`)
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
  },
  async mounted () {
    this.initH5P()
  }
}
</script>

<style scoped>
.h5p-iframe-wrapper {
  background-color: #DDD;
}

iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}
</style>
