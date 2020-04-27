const nodeExternals = require('webpack-node-externals')
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  configureWebpack (config) {
    const isFrameBuild = path.basename(config.output.path) === 'frame'
    return {
      externals: process.env.VUE_CLI_BUILD_TARGET === 'lib' ? [nodeExternals()] : [],
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
      },
      module: {
        rules: [
          {
            test: path.resolve(__dirname, 'vendor/h5p/js', 'h5p'),
            use: ['exports-loader?H5P', 'imports-loader?jQuery=h5pjquery', 'imports-loader?H5PIntegration=>window.H5PIntegration']
          }
        ]
      },
      plugins: [
        new CopyPlugin(!isFrameBuild ? [
          { from: 'vendor/h5p/styles', to: 'frame/styles' },
          { from: 'vendor/h5p/fonts', to: 'frame/fonts' }
          /* { from: 'vendor/standalone/dist/frame.bundle.js', to: 'frame/frame.umd.min.js'} */
          /* { from: 'vendor/h5p/images/', to: 'frame/images' } */
        ] : [])
      ]
    }
  }
}
