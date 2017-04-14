'use strict'

const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const glob = require('glob')
const path = require('path')

const pkg = require('./package.json')
const config = require('./config.json')
const {NamedModulesPlugin} = webpack

module.exports = {
  performance: {
    hints: false
  },
  devtool: 'eval',
  cache: true,
  entry: [
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint
    'webpack-dev-server/client?http://0.0.0.0:3000',
    // the entry point of our app
    './src/app/index.js'
  ],
  output: {
    path: path.resolve('src/www'),
    filename: 'assets/js/bundle.js'
  },
  resolve: {
    extensions: ['.scss', '.css', '.js', '.json'],
    modules: ['node_modules']
  },
  module: {
    rules: [{
      test: /(\.js|\.jsx)$/,
      exclude: /node_modules\/(?!(autotrack|dom-utils))/,
      loader: ['react-hot-loader/webpack', 'babel-loader?cacheDirectory']
    }, {
      test: /(\.scss|\.css)$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          sourceMap: true
        }
      }, {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
          /* Bug related with scoped path workaround,
             see:https://git.io/vSMim
          */
          includePaths: ['node_modules', 'node_modules/@material/*']
                .map((d) => path.join(__dirname, d))
                .map((g) => glob.sync(g))
                .reduce((a, c) => a.concat(c), [])
        }
      }, {
        loader: 'postcss-loader',
        options: {
          parser: require('postcss-scss'),
          sourceMap: 'inline'
        }
      }
      ]
    }]
  },
  plugins: [
    new DashboardPlugin(),
    new NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'APP_VERSION': JSON.stringify(pkg.version)
    }),
    new HtmlWebpackPlugin(Object.assign({}, config, {
      template: path.resolve('index.ejs'),
      alwaysWriteToDisk: true,
      inject: false
    })),
    new HtmlWebpackHarddiskPlugin(),
    new BrowserSyncPlugin(
      // BrowserSync options
      {
        // browse to http://localhost:3000/ during development
        host: 'localhost',
        port: 3001,
        // proxy the Webpack Dev Server endpoint
        // (which should be serving on http://localhost:3100/)
        // through BrowserSync
        proxy: 'http://localhost:3000',
        open: false
      },
      // plugin options
      {
        // prevent BrowserSync from reloading the page
        // and let Webpack Dev Server take care of this
        reload: true
      }
    )
  ]
}
