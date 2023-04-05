<template>
  <div>
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
      :style="style"
      src="/h5p/"
      :l10n="translations[locale]"
      :css="`
        .h5p-chart .h5p-chart-chart {
          background-color: cadetblue;
          padding: 15px;
        }
      `"
      icon
      copyright
      export="true"
      @height-changed="setHeight"
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
import H5p from '@/h5p.vue'

export default {
  name: 'Example',
  components: {
    H5p
  },
  data () {
    return {
      locale: 'en',
      translations: {
        en: {},
        de: {
          reuse: 'Wiederverwenden',
          reuseContent: 'Content Wiederverwenden'
        }
      },
      height: null
    }
  },
  computed: {
    style () {
      return {
        height: this.height + 'px'
      }
    }
  },
  methods: {
    log (ev) {
      console.log('received xapi statement', ev)
    },
    setHeight (newHeight) {
      this.height = newHeight
      console.log(newHeight)
    }
  }
}
</script>
