export default (collection, size) =>
  collection.length > 0 ? collection : Array(size).fill({})
