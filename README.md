<div align="center">

[![GitHub Actions](https://img.shields.io/github/actions/workflow/status/apm-wb/vue-h5p/push.yaml?branch=main)](https://github.com/apm-wb/vue-h5p/actions/workflows/push.yaml)
[![Coveralls GitHub](https://img.shields.io/coveralls/github/apm-wb/vue-h5p)](https://coveralls.io/github/apm-wb/vue-h5p)
[![Dependabot](https://img.shields.io/badge/dependabot-enabled-success)](https://github.com/apm-wb/vue-h5p/blob/main/package.json)
[![License](https://img.shields.io/npm/l/vue-h5p)](https://github.com/apm-wb/vue-h5p/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/v/vue-h5p)](https://www.npmjs.com/package/vue-h5p)
![vue](https://img.shields.io/badge/vue-2.x-brightgreen)

</div>

# vue-h5p

A vue h5p component for displaying H5P content standalone, inspired by [tunapanda/h5p-standalone](https://github.com/tunapanda/h5p-standalone).

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
    <template #error>
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

| Prop       | Required | Type    | Default | Description                             |
| ---------- | -------- | ------- | ------- | --------------------------------------- |
| copy       | no       | Boolean | false   | Enable copy button                      |
| copyright  | no       | Boolean | false   | Enable copyright button                 |
| css        | no       | String  | ''      | Inject css into a <style> in the iframe |
| embed      | no       | String  | ''      | Set embedCode and enable embed button   |
| export     | no       | String  | ''      | Set exportUrl and enable export button  |
| fullscreen | no       | Boolean | false   | Enable fullscreen button                |
| icon       | no       | Boolean | false   | Enable H5P icon                         |
| l10n       | no       | Object  | {}      | UI translations                         |
| resize     | no       | String  | ''      | Set resizeCode                          |
| src        | yes      | String  | -       | Path to the h5p content                 |
| actor      | no       | Object  | -       | Set actor for emitted xAPI statements   |

See [Creating your own h5p plugin](https://h5p.org/creating-your-own-h5p-plugin) for translation strings.

NOTE: UI translations are not reactive. You have to manually trigger a rerender for translation changes to take effect (e.g. by binding :key to your locale).

### Events

All events emitted by H5P are emitted by vue-h5p, event names are the H5P [event type](https://h5p.org/events), payload is the event data.

Besides that we emit an "ready" event when H5P signals that its loaded, and "height-changed" events (with the new height as integer argument), whenever H5P resize the iframe.

### Slots

You can use the default slot to render a placeholder while the content is loading.

The named slot "error" is rendered if a request to get the h5p JSON files fails, the slot-scope provides failed request as "error" object.

### Custom CSS

You can inject custom CSS into the H5P iframe by using the `css` prop.

```html
<h5p
  src="path/to/h5p-content"
  :css="`
    .class-in-the-iframe {
      background-color: #fff;
    }
  `"
/>
```

# Actor for xAPI statements

The actor prop can be set to either a combination of name and email adress or to a combination of name and homePage, according to the xAPI specs.

```javascript
{
  name: 'John Doe',
  mail: 'john.doe@example.com'
}

{
  name: 'account-id',
  homePage: 'https://example.com'
}
```

## Development

Put your extracted h5p content into example/public/h5p, files are served by vue-dev-server.

Serve the example using

`yarn serve`

Write code, commit changes using conventional commits.
