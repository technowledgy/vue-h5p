const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    frame: './src/frame.js'
  },
  output: {
    filename: 'frame.js',
    path: path.resolve(__dirname, 'frame'),
    libraryTarget: 'umd'
  },
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
        use: ['exports-loader?H5P', 'imports-loader?jQuery=h5pjquery']
      }
    ]
  }
}
