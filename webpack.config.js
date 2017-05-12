'use strict'

const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const PreloadWebpackPlugin = require('preload-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const PurifyCSSPlugin = require('purifycss-webpack')
const OfflinePlugin = require('offline-plugin')
const webpack = require('webpack')
const glob = require('glob')
const path = require('path')

const config = require('./config.json')
const pkg = require('./package.json')

const { DefinePlugin, HashedModuleIdsPlugin } = webpack

const {
  OccurrenceOrderPlugin,
  AggressiveMergingPlugin,
  CommonsChunkPlugin,
  UglifyJsPlugin } = webpack.optimize

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
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules\/(?!(autotrack|dom-utils))/,
      use: ['babel-loader']
    }, {
      test: /\.(css|scss)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            minimize: true,
            sourceMap: true,
            importLoaders: 2
          }
        }, {
          loader: 'postcss-loader',
          options: {
            parser: 'postcss-scss',
            sourceMap: 'inline'
          }
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }]
      })
    }]
  },
  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'APP_VERSION': JSON.stringify(pkg.version)
    }),
    new HashedModuleIdsPlugin(),
    new OccurrenceOrderPlugin(),
    new AggressiveMergingPlugin(),
    new ExtractTextPlugin({
      allChunks: true,
      filename: 'assets/css/bundle.css'
    }),
    new PurifyCSSPlugin({
      paths: [
        'src/app/**/*.js',
        'src/app/Range/style.scss',
        'src/app/CurrentRefinements/style.scss',
        'src/app/style.scss'
      ].reduce((acc, pattern) => acc.concat(glob.sync(pattern, { nodir: true })), []),
      purifyOptions: {
        info: true,
        minify: true,
        rejected: true
      }
    }),
    new UglifyJsPlugin({
      sourceMap: true,
      minimize: true,
      compress: { warnings: false },
      comments: false
    }),
    new CommonsChunkPlugin({
      name: 'vendor',
      filename: 'assets/js/vendor.bundle.js',
      minChunks: Infinity
    }),
    new OfflinePlugin({
      relativePaths: false,
      publicPath: '/',
      caches: {
        main: [':rest:'],
        additional: [
          'assets/js/vendor.bundle.js',
          ':externals:'
        ],
        externals: [
          'https://static.hotjar.com/c/hotjar-342795.js?sv=5',
          'https://www.google-analytics.com/analytics.js'
        ]
      },
      safeToUseOptionalCaches: true,
      AppCache: false
    }),
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
    new PreloadWebpackPlugin(),
    new HtmlWebpackHarddiskPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      generateStatsFile: true,
      logLevel: 'error'
    })
  ]
}
