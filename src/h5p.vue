<template>
  <div class="h5p-iframe-wrapper">
    <iframe :id="'h5p-iframe-' + id" class="h5p-iframe" :data-content-id="id" src="about:blank" frameBorder="0"/>
  </div>
</template>

<script>
import superagent from 'superagent'
// import H5P from 'H5P'

export default {
  name: 'h5p',
  props: {
    src: {
      type: String,
      required: true
    }
  },
  data () {
    /* TODO: check if we need this */
    return {
      id: Math.random().toString(36).substr(2, 9),
      h5p: undefined
    }
  },
  methods: {
    async getJSON (url) {
      const resp = await superagent.get(url)
      return resp.body
    },
    async initH5P () {
      this.h5p = await this.getJSON(`${this.src}'h5p.json'`)

      /* const content = await this.getJSON(`${this.src}/content/content.json`)
      H5PIntegration.pathIncludesVersion = this.pathIncludesVersion = await this.checkIfPathIncludesVersion()

      this.mainLibrary = await this.findMainLibrary()

      const dependencies = await this.findAllDependencies()

      const { styles, scripts } = this.sortDependencies(dependencies)

      H5PIntegration.url = this.path
      H5PIntegration.contents = H5PIntegration.contents ? H5PIntegration.contents : {}

      H5PIntegration.core = {
        styles: [frameCss],
        scripts: [frameJs]
      }

      H5PIntegration.contents[`cid-${this.id}`] = {
        library: `${this.mainLibrary.machineName} ${this.mainLibrary.majorVersion}.${this.mainLibrary.minorVersion}`,
        jsonContent: JSON.stringify(content),
        styles: styles,
        scripts: scripts,
        displayOptions: displayOptions
      } */

      // H5P.init()
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
