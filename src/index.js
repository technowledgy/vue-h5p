import h5p from './h5p.vue'

// Declare install function executed by Vue.use()
export function install (Vue) {
  Vue.component('H5p', h5p)
}

// Auto-install when vue is found (eg. in browser via <script> tag)
if (typeof globalThis !== 'undefined' && globalThis.Vue) {
  globalThis.Vue.use({ install })
}

// To allow use as module (npm/webpack/etc.) export component
export default h5p
