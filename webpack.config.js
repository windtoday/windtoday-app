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
    extensions: ['', '.scss', '.css', '.js', '.json'],
    modulesDirectories: ['node_modules']
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
        minifyJS: true
      }
    })),
    new HtmlWebpackHarddiskPlugin(),
    new ExtractTextPlugin('assets/css/bundle.css', { allChunks: true }),
    new PurifyCSSWebpackPlugin({
      basePath: path.resolve('src/www'),
      resolveExtensions: ['.js'],
      purifyOptions: {
        minify: true,
        rejected: true
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'assets/js/vendor.bundle.js',
      minChunks: Infinity
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      comments: false
    })
  ],
  module: {
    loaders: [{
      test: /(\.js|\.jsx)$/,
      exclude: /node_modules/,
      loaders: ['babel'],
      include: path.resolve('src/app')
    }, {
      test: /(\.scss|\.css)$/,
      loader: ExtractTextPlugin.extract('style', 'css?minimize&sourceMap!sass!postcss')
    }, {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]'
    }, {
      test: /\.woff2(\?\S*)?$/,
      loader: 'url?limit=10000&mimetype=application/font-woff2&name=fonts/[name].[ext]'
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/font-tff&name=fonts/[name].[ext]'
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file?name=fonts/[name].[ext]'
    }, {
      test: /\.png(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file?name=img/[name].[ext]'
    }, {
      test: /\.gif(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file?name=img/[name].[ext]'
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=image/svg+xml&name=img/[name].[ext]'
    }]
  },
  postcss: [
    require('postcss-focus'),
    require('autoprefixer')
  ]
}
