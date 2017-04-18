'use strict'

const glob = require('glob')

const paths = [
  'src/app/**/*.js',
  'src/app/Range/style.scss',
  'src/app/style.scss'
].reduce((acc, pattern) => acc.concat(glob.sync(pattern, { nodir: true })), [])

console.log(paths)
