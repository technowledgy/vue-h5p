const nodeExternals = require('webpack-node-externals')
const path = require('path')

module.exports = {
  chainWebpack: config => {
    config.module.rule('fonts').use('url-loader').tap(options => {
      options.limit = true
      return options
    })
    config.module.rule('images').use('url-loader').tap(options => {
      options.limit = true
      return options
    })
  },
  configureWebpack (config) {
    return {
      output: {
        libraryExport: 'default'
      },
      externals: process.env.VUE_CLI_BUILD_TARGET === 'lib' ? [nodeExternals()] : []
    }
  }
}
