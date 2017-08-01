const IMAGE_PLACEHOLDER = ''

const urlWithoutProtocol = url => url.replace(/(^\w+:|^)\/\//, '')

export default (hit, width) => {
  const {image, provider} = hit

  if (!provider) return IMAGE_PLACEHOLDER
  if (!image) return `/assets/img/provider/${provider}.jpg`

  const url = urlWithoutProtocol(image)
  const baseUrl = `https://images.weserv.nl/?url=${url}&trim`
  return width ? `${baseUrl}&w=${width}` : baseUrl
}
