<template>
  <vue-h5p src="/h5p/"/>
</template>

<script>
import VueH5p from '@/VueH5p'

export default {
  name: 'Example',
  components: {
    VueH5p
  },
  async mounted () {
    console.log('Vue-h5p example loaded!')
  }
}
</script>
