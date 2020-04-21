<template>
  <div>{{ src }}</div>
</template>

<script>
import superagent from 'superagent'
import H5P from 'H5P'

export default {
  name: 'Postgrest',
  props: {
    src: {
      type: String,
      required: true
    }
  },
  methods: {
    async getJSON (url) {
      const resp = await superagent.get(url)
      return resp.body
    }
  },
  async mounted () {
    console.log('fetching json')
    const json = await this.getJSON(this.src + 'h5p.json')
    console.log('JSON: ', json)
  }
}
</script>
