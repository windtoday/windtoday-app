'use strict'

const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const PurifyCSSWebpackPlugin = require('purifycss-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OfflinePlugin = require('offline-plugin')
const config = require('./config.json')
const pkg = require('./package.json')
const webpack = require('webpack')
const { CommonsChunkPlugin, UglifyJsPlugin } = webpack.optimize
const path = require('path')

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    './src/app/index.js'
  ],
  output: {
    path: path.resolve('src/www'),
    filename: 'assets/js/bundle.js'
  },
  resolve: {
    extensions: ['.scss', '.css', '.js'],
    modules: ['node_modules']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'APP_VERSION': JSON.stringify(pkg.version)
    }),
    new LodashModuleReplacementPlugin(),
    new HtmlWebpackPlugin(Object.assign({}, config, {
      template: path.resolve('index.ejs'),
      alwaysWriteToDisk: true,
      inject: false,
      hash: true,
      minify: {
        collapseWhitespace: true,
        decodeEntities: true,
        html5: true,
        processConditionalComments: true,
        removeAttributeQuotes: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeOptionalTags: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        removeTagWhitespace: true,
        sortAttributes: true,
        sortClassName: true,
        useShortDoctype: true,
        minifyJS: true
      }
    })),
    new HtmlWebpackHarddiskPlugin(),
    new ExtractTextPlugin({
      allChunks: true,
      filename: 'assets/css/bundle.css'
    }),
    new PurifyCSSWebpackPlugin({
      basePath: path.resolve('src/www'),
      paths: ['*.html'],
      purifyOptions: {
        minify: true,
        rejected: true
      }
    }),
    new CommonsChunkPlugin({
      name: 'vendor',
      filename: 'assets/js/vendor.bundle.js',
      minChunks: Infinity
    }),
    new UglifyJsPlugin({
      sourceMap: true,
      minimize: true,
      compress: { warnings: false },
      comments: false
    }),
    new OfflinePlugin({
      caches: {
        main: [':rest:'],
        additional: ['vendor.bundle.js', ':externals:']
      },
      safeToUseOptionalCaches: true,
      AppCache: false
    })
  ],
  module: {
    rules: [{
      test: /(\.js|\.jsx)$/,
      exclude: /node_modules/,
      loader: ['babel-loader'],
      include: path.resolve('src/app')
    }, {
      test: /(\.scss|\.css)$/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: [
          'css-loader?minimize&sourceMap&importLoaders=2',
          'sass-loader',
          'postcss-loader'
        ]
      })
    }]
  }
}
