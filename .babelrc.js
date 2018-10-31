'use strict'

const env = require('./env.config')

module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'styled-components',
      {
        ssr: true,
        displayName: true,
        preprocess: false
      }
    ],
    ['transform-define', env],
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          styles: './styles',
          components: './components',
          util: './util',
          config: './config'
        },
        cwd: 'babelrc'
      }
    ],
    [
      'wrap-in-js',
      {
        extensions: ['css$', 'scss$']
      }
    ]
  ],
  ignore: []
}
