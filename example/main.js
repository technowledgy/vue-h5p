import Vue from 'vue'
import Example from './Example'

Vue.config.productionTip = false

new Vue({
  render: h => h(Example)
}).$mount('#app')
