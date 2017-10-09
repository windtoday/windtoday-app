'use strict'

module.exports = () => ({
  plugins: [
    require('postcss-easy-import'),
    require('postcss-focus'),
    require('cssnano')({
      autoprefixer: true,
      mergeIdents: true,
      zindex: true,
      discardUnused: true
    })
  ]
})
