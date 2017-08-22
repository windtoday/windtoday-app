export default timestamp =>
  new Date(timestamp).toLocaleString('en-us', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
