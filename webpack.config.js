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
  devtool: 'source-map',
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
    // new OfflinePlugin({
    //   caches: {
    //     main: [':rest:'],
    //     additional: [
    //       'assets/js/vendor.bundle.js',
    //       ':externals:'
    //     ],
    //     externals: [
    //       'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    //       'https://static.hotjar.com/c/hotjar-342795.js?sv=5',
    //       'https://www.google-analytics.com/analytics.js'
    //     ]
    //   },
    //   safeToUseOptionalCaches: true,
    //   AppCache: false
    // }),
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
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    })),
    new HtmlWebpackHarddiskPlugin(),
    new ExtractTextPlugin({
      allChunks: true,
      filename: 'assets/css/bundle.css'
    }),
    new PurifyCSSWebpackPlugin({
      basePath: path.resolve('src/www'),
      resolveExtensions: ['.js'],
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
    })
  ],
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: ['babel-loader'],
      include: path.resolve('src/app')
    }, {
      test: /\.(css|scss)$/,
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
