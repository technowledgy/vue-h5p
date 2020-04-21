const nodeExternals = require('webpack-node-externals')
const path = require('path');

/* TODO: check if we need all of the aliases */

module.exports = {
  configureWebpack (config) {
    return {
      output: {
        libraryExport: 'default'
      },
      externals: process.env['VUE_CLI_BUILD_TARGET'] === 'lib' ? [nodeExternals()] : [],
      resolve: {
        alias: {
          h5pjquery: path.resolve(__dirname, 'vendor/h5p/js', 'jquery'),
          H5P: path.resolve(__dirname, 'vendor/h5p/js', 'h5p'),
          H5PEventDispatcher: path.resolve(__dirname, 'vendor/h5p/js', 'h5p-event-dispatcher'),
          H5PxAPI: path.resolve(__dirname, 'vendor/h5p/js', 'h5p-x-api'),
          H5PxAPIEvent: path.resolve(__dirname, 'vendor/h5p/js', 'h5p-x-api-event'),
          H5PContentType: path.resolve(__dirname, 'vendor/h5p/js', 'h5p-content-type'),
          H5PActionBar: path.resolve(__dirname, 'vendor/h5p/js', 'h5p-action-bar'),
          H5PRequestQueue: path.resolve(__dirname, 'vendor/h5p/js', 'request-queue'),
          H5PConfirmationDialog: path.resolve(__dirname, 'vendor/h5p/js', 'h5p-confirmation-dialog')
        }
      }
    }
  }
}
