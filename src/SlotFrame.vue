<template>
  <iframe v-once @load="renderChildren" srcdoc="<!DOCTYPE html><html/>"/>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'SlotFrame',
  methods: {
    renderChildren () {
      const doc = this.$el.contentDocument

      const headApp = new Vue({
        name: 'headApp',
        render (h) {
          return h('head', this.children)
        }
      })

      headApp.children = Object.freeze(this.$slots.head)
      headApp.$mount(doc.head)

      const bodyApp = new Vue({
        name: 'bodyApp',
        render (h) {
          return h('body', this.children)
        }
      })

      bodyApp.children = Object.freeze(this.$slots.default)
      bodyApp.$mount(doc.body)
    }
  }
}
</script>
