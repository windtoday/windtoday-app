export default (hex, opacity) => {
  if (typeof hex !== 'string') throw new TypeError('Expected a string')
  hex = hex.replace(/^#/, '')
  if (hex.length === 3) { hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] }
  const num = parseInt(hex, 16)
  const rgb = [num >> 16, (num >> 8) & 255, num & 255].join(',')
  return `${rgb}, ${opacity}`
}
