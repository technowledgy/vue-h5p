const nodeExternals = require('webpack-node-externals')
const path = require('path');

module.exports = {
  configureWebpack: {
    output: {
      libraryExport: 'default'
    },
    target: 'node',
    externals: [nodeExternals()],
    resolve: {
    alias: {
      /* TODO: check if we need all of these */
      h5pjquery: path.resolve(path.resolve(__dirname, 'vendor/h5p/js', 'jquery')),
      H5P: path.resolve(__dirname, 'vendor/h5p/js', 'h5p'),
      H5PEventDispatcher: path.resolve(path.resolve(__dirname, 'vendor/h5p/js', 'h5p-event-dispatcher')),
      H5PxAPI: path.resolve(path.resolve(__dirname, 'vendor/h5p/js', 'h5p-x-api')),
      H5PxAPIEvent: path.resolve(path.resolve(__dirname, 'vendor/h5p/js', 'h5p-x-api-event')),
      H5PContentType: path.resolve(path.resolve(__dirname, 'vendor/h5p/js', 'h5p-content-type')),
      H5PActionBar: path.resolve(path.resolve(__dirname, 'vendor/h5p/js', 'h5p-action-bar')),
      H5PRequestQueue: path.resolve(path.resolve(__dirname, 'vendor/h5p/js', 'request-queue')),
      H5PConfirmationDialog: path.resolve(path.resolve(__dirname, 'vendor/h5p/js', 'h5p-confirmation-dialog'))
    }
  },
  }
}
