# vue-h5p
A vue h5p component based on [tunapanda/h5p-standalone](https://github.com/tunapanda/h5p-standalone).

## Installation

### With module loader

`npm install vue-h5p`

or

`yarn add vue-h5p`

in main.js:
```
import VueH5p from 'vue-h5p'

Vue.use(VueH5p)
```

### With script tag
Include `<script src="https://unpkg.com/vue-h5p"></script>`

## Usage
Component "vue-h5p" is registered globally on your Vue instance. You can also import the component directly using your module loader, e.g. for use in SFCs.

### Quick example
```
<vue-h5p src="api/content/h5p"/>
```

## Development

Serve the example using

`yarn example`

Write code, commit changes using conventional commits.

Prepare release with

`yarn pre-version`
