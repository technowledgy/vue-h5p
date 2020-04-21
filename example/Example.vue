<template>
  <h5p src="/h5p/"/>
</template>

<script>
import h5p from '@/h5p'

export default {
  name: 'Example',
  components: {
    h5p
  },
  async mounted () {
    console.log('Vue-h5p example loaded!')
  }
}
</script>
