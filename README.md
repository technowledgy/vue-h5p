# vue-h5p
A vue h5p component based on [tunapanda/h5p-standalone](https://github.com/tunapanda/h5p-standalone).

## Installation

### With module loader

`npm install vue-h5p`

or

`yarn add vue-h5p`

in your component:

```
<template>
  <h5p src="path/to/h5p-content" frame="path/to/frame"
</template>

<script>
import h5p from 'vue-h5p'

export default {
  components: {
    h5p
  }
}
</script>
```



## Development

Put your extracted h5p content into public/h5p, files are served by vue-dev-server.

Serve the example using

`yarn example`

Write code, commit changes using conventional commits.

Prepare release with

`yarn pre-version`
