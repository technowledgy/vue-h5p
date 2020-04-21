<template>
  <vue-h5p src="api/content/id"/>
</template>

<script>
import VueH5p from '@/VueH5p'

export default {
  name: 'Example',
  components: {
    VueH5p
  },
  mounted () {
    console.log('Vue-h5p example loaded!')
  }
}
</script>
