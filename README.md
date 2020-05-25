# vue-h5p
A vue h5p component for displaying H5P content standalone, based on [tunapanda/h5p-standalone](https://github.com/tunapanda/h5p-standalone).

## Installation

### With module loader

`npm install vue-h5p`

or

`yarn add vue-h5p`

in your component:

```
<template>
  <h5p src="path/to/h5p-content" :l10n="translations" @xapi="handleXAPIEvent">
    Loading...
    <template v-slot:resourceNotAvailable>
      Resource not available. :(
    </template>
  </h5p>
</template>

<script>
import h5p from 'vue-h5p'
import translations from './translations'

export default {
  components: {
    h5p
  },
  computed: {
    translations () {
      return translations
    }
  },
  methods: {
    handleXAPIEvent (ev) {
      console.log('H5P emitted X-API event')
    }
  }
}
</script>
```

### Props

The component accepts the following props:

|Prop           | Required | Type          | Default | Description|
|---------------|----------|---------------|---------|------------|
|src            |yes       |String         |-        |Path to the h5p content|
|l10n           |no        |Object         |{}       |UI translations|
|displayOptions |no        |Object         |-        |Set display Options for the content|

See https://h5p.org/creating-your-own-h5p-plugin for translation strings.

Available display options are:

``` js
const displayOptions = {
  frame: true,
  copyright: true,
  embed: true,
  download: true,
  icon: true,
  export: true
}
```

NOTE: UI translations are not reactive. You have to manually trigger a rerender for translation changes to take effect (e.g. by binding :key to your locale).


### Events

All events emitted by H5P are emitted by vue-h5p, event names are the H5P [event type](https://h5p.org/events), payload is the event data.

### Slots

You can use the default slot to render a placeholder while the content is loading.

The named slot "error" is rendered if a request to get the h5p JSON files fails, the slot-scope provides failed request as "response" object.

## Development

Put your extracted h5p content into public/h5p, files are served by vue-dev-server.

Serve the example using

`yarn example`

Write code, commit changes using conventional commits.

Prepare release with

`yarn pre-version`
