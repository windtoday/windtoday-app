'use strict'

const pkg = require('./package.json')
const config = require('config')

const serializedObject = (key, obj) => Object.keys(obj).reduce((acc, prop) => {
  const value = obj[prop]
  acc[`${key}.${prop}`] = value
  return acc
}, {})

// we do that for removing non object properties
const rawConfig = config.util.toObject(config)

const globalConfig = Object.keys(rawConfig).reduce((acc, key) => {
  const value = rawConfig[key]
  const parentKey = `APP.${key}`
  return Object.assign({}, acc, serializedObject(parentKey, value))
}, {})

globalConfig['APP.version'] = pkg.version

module.exports = globalConfig
