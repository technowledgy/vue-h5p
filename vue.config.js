const nodeExternals = require('webpack-node-externals')

module.exports = {
  configureWebpack (config) {
    return {
      output: {
        libraryExport: "default"
      },
      externals: process.env.VUE_CLI_BUILD_TARGET === 'lib' ? [nodeExternals()] : []
    }
  }
}
