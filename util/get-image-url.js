const IMAGE_PLACEHOLDER = 'https://blog.windtoday.co/cover.jpg'

const urlWithoutProtocol = url => url.replace(/(^\w+:|^)\/\//, '')

export default ({ image }, width = 600) => {
  if (!image) return IMAGE_PLACEHOLDER
  const url = urlWithoutProtocol(image)
  const baseUrl = `https://images.weserv.nl/?url=${url}&trim`
  return width ? `${baseUrl}&w=${width}` : baseUrl
}
