<template>
  <div>
    <iframe
      v-if="srcdoc"
      v-show="!loading"
      ref="iframe"
      style="width: 100%; height: 100%; border: none;"
      :allow="fullscreen ? 'fullscreen' : 'fullscreen none'"
      @load="iFrameLoaded"
    />
    <template v-if="loading">
      <slot />
    </template>
    <template v-else-if="error">
      <slot
        name="error"
        :error="error"
      />
    </template>
  </div>
</template>

<script>
import Toposort from 'toposort-class'
import { FetchError } from '@/errors'
import l10n from '@/l10n'
import frameScript from '../frame/script.cjs?raw'
import frameStyle from '../frame/style?raw'

export default {
  name: 'H5p',
  props: {
    src: {
      type: String,
      required: true
    },
    embed: {
      type: String,
      default: ''
    },
    resize: {
      type: String,
      default: ''
    },
    export: {
      type: String,
      default: ''
    },
    copy: {
      type: Boolean,
      default: false
    },
    copyright: {
      type: Boolean,
      default: false
    },
    icon: {
      type: Boolean,
      default: false
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    css: {
      type: String,
      default: ''
    },
    l10n: {
      type: Object,
      default: () => ({})
    },
    integration: {
      type: Object,
      default: () => ({})
    },
    actor: {
      type: Object,
      default: null,
      validator: (val) => val ? ['mail,name', 'homePage,name'].includes(Object.keys(val).sort().join(',')) : true
    }
  },
  data () {
    return {
      loading: true,
      error: undefined,
      srcdoc: '',
      height: null
    }
  },
  computed: {
    path () {
      return this.src.endsWith('/') ? this.src.slice(0, -1) : this.src
    }
  },
  watch: {
    height (newHeight) {
      this.$emit('height-changed', newHeight)
    }
  },
  beforeDestroy () {
    window.removeEventListener('message', this.onMessage)
    this.resizeObserver?.disconnect()
  },
  async mounted () {
    this.onMessage = evt => {
      if (evt.data.context !== 'h5p') return

      if (evt.data.action === 'hello') {
        this.$refs.iframe.contentWindow.H5P.externalDispatcher.on('*', (ev) => {
          this.$emit(ev.type.toLowerCase(), ev.data)
        })

        this.resizeObserver = new ResizeObserver(this.triggerResize)
        this.resizeObserver.observe(this.$el)

        this.$refs.iframe.contentWindow.postMessage({ action: 'hello', context: 'h5p' }, '*')

        this.$emit('ready')
      } else if (evt.data.action === 'prepareResize') {
        this.height = evt.data.clientHeight
      }
    }
    window.addEventListener('message', this.onMessage)

    let h5p
    let content
    let libraries

    if (this.actor?.homePage) {
      localStorage.H5PUserUUID = this.actor.name
    }

    try {
      h5p = await this.getJSON('h5p.json')
      content = await this.getJSON('content', 'content.json')
      libraries = await this.loadDependencies(h5p.preloadedDependencies)
    } catch (e) {
      this.error = e
      this.loading = false
      return
    }

    const { machineName, majorVersion, minorVersion } = h5p.preloadedDependencies.find(dep => dep.machineName === h5p.mainLibrary)
    const h5pIntegration = {
      fullscreenDisabled: !this.fullscreen,
      l10n: {
        H5P: Object.assign({}, l10n.H5P, this.l10n)
      },
      url: this.path,
      contents: {
        'cid-default': {
          embedCode: this.embed,
          resizeCode: this.resize,
          exportUrl: this.export,
          fullScreen: this.fullscreen,
          library: `${machineName} ${majorVersion}.${minorVersion}`,
          jsonContent: JSON.stringify(content),
          url: this.path,
          displayOptions: {
            frame: Boolean(this.export || this.embed || this.copyright || this.icon),
            export: Boolean(this.export),
            embed: Boolean(this.embed),
            copyright: this.copyright,
            icon: this.icon,
            copy: this.copy
          },
          metadata: {
            license: h5p.license,
            defaultLanguage: h5p.defaultLanguage,
            title: h5p.title
          }
        }
      },
      _libraryPaths: Object.fromEntries(
        Object.entries(libraries).map(
          ([id, lib]) => [id, lib.path]
        )
      ),
      siteUrl: this.actor?.homePage,
      user: this.actor?.mail ? this.actor : undefined,
      ...this.integration
    }

    const { styles, scripts } = this.sortDependencies(libraries)

    // workaround for vue-loader parsing this as the end of our SFC's script block
    const endScript = '</' + 'script>'
    const contentStyles = styles.map(style => `<link rel="stylesheet" href="${style}">`).join('\n')
    const contentScripts = scripts.map(script => `<script src="${script}">${endScript}`).join('\n')
    this.srcdoc = `<!doctype html>
<html class="h5p-iframe">
  <head>
    <base target="_parent">
    <style>${frameStyle}</style>
    ${contentStyles}
    <style>${this.css}</style>
    <script>H5PIntegration = ${JSON.stringify(h5pIntegration)};var H5P = H5P || {};H5P.externalEmbed = true;${endScript}
    <script>${frameScript}${endScript}
    ${contentScripts}
  </head>
  <body>
    <div class="h5p-content" data-content-id="default"/>
  </body>
</html>`
  },
  methods: {
    iFrameLoaded () {
      if (this.loading) {
        // Instead of setting the srcdoc prop on the iframe, we use document.write.
        // This is because of https://bugzilla.mozilla.org/show_bug.cgi?id=1741489,
        // which prevents passing authentication cookies into the iframe, if srcdoc
        // is used.
        this.$refs.iframe.contentDocument.open()
        this.$refs.iframe.contentDocument.write(this.srcdoc)
        this.$refs.iframe.contentDocument.close()
        this.loading = false
      }
    },
    async getJSON (...url) {
      const resp = await fetch(this.path + '/' + url.join('/'), { credentials: 'include' })
      if (!resp.ok) {
        let body = {}
        try {
          body = await resp.json()
        } catch {}
        throw new FetchError(resp, body)
      }
      return resp.json()
    },
    async loadDependencies (deps, libraryMap = {}) {
      await Promise.all(deps.map(async ({ machineName, majorVersion, minorVersion }) => {
        const id = `${machineName}-${majorVersion}.${minorVersion}`
        if (libraryMap[id]) return
        try {
          libraryMap[id] = {
            library: await this.getJSON(id, 'library.json'),
            path: id
          }
        } catch {
          libraryMap[id] = {
            library: await this.getJSON(machineName, 'library.json'),
            path: machineName
          }
        }
        const libDeps = libraryMap[id].library.preloadedDependencies
        if (libDeps) {
          this.loadDependencies(libDeps, libraryMap)
          libraryMap[id].dependencies = libDeps.map(({ machineName, majorVersion, minorVersion }) => `${machineName}-${majorVersion}.${minorVersion}`)
        }
      }))
      return libraryMap
    },
    sortDependencies (libraries) {
      const sorter = new Toposort()
      Object.entries(libraries)
        .forEach(([id, { dependencies = [] }]) => sorter.add(id, dependencies))
      const sorted = sorter.sort().reverse()

      const styles = sorted.map(id => libraries[id])
        .map(({ path, library }) => library.preloadedCss?.map(file => `${this.path}/${path}/${file.path}`))
        .flat(1)
        .filter(Boolean)

      const scripts = sorted.map(id => libraries[id])
        .map(({ path, library }) => library.preloadedJs?.map(file => `${this.path}/${path}/${file.path}`))
        .flat(1)
        .filter(Boolean)

      return { styles, scripts }
    },
    triggerResize () {
      const H5P = this.$refs.iframe.contentWindow.H5P
      H5P.trigger(H5P.instances[0], 'resize')
    }
  }
}
</script>
