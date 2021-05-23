<template>
  <div class="wrapper">
    <input
      v-model="locale"
      type="radio"
      value="en"
    >EN
    <input
      v-model="locale"
      type="radio"
      value="de"
    >DE
    <h5p
      :key="locale"
      src="/h5p/"
      :l10n="translations[locale]"
      icon
      copyright
      @xapi="log"
    >
      Loading...
      <template #404="{ response }">
        {{ response.url + ' ' + response.statusText }}
      </template>
    </h5p>
  </div>
</template>

<script>
import h5p from '@/h5p'

export default {
  name: 'Example',
  components: {
    h5p
  },
  data () {
    return {
      locale: 'en',
      displayOptions: {
        frame: true,
        copyright: true,
        embed: true,
        icon: true,
        export: true
      },
      translations: {
        en: {},
        de: {
          reuse: 'Wiederverwenden',
          reuseContent: 'Content Wiederverwenden'
        }
      }
    }
  },
  async mounted () {
    console.log('Vue-h5p example loaded!')
  },
  methods: {
    log (ev) {
      console.log('catched: ', ev)
    }
  }
}
</script>

<style>
.wrapper {
  height: 98vh;
}
</style>
