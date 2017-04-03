'use strict'

const WebpackDevServer = require('webpack-dev-server')
const config = require('../webpack.dev.config')
const webpack = require('webpack')

const compiler = webpack(config)

const server = new WebpackDevServer(compiler, {
  publicPath: config.output.publicPath,
  hot: false,
  overlay: true,
  historyApiFallback: true,
  contentBase: 'src/www'
})

server.listen(3000, 'localhost', function (err) {
  if (err) throw err
})
