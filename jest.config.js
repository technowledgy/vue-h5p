module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleNameMapper: {
    "frame/": "<rootDir>/tests/mocks/frame",
    "vendor/h5p/styles/": "<rootDir>/tests/mocks/h5p.css"
  },
  setupFiles: ['<rootDir>/tests/fetch.setup.js']
}
