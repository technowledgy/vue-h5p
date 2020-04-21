<template>
  <div>{{ src }}</div>
</template>

<script>
export default {
  name: 'Postgrest',
  props: {
    src: {
      type: String,
      required: true
    }
  }
}
</script>
