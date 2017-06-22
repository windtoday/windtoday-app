const IMAGE_PLACEHOLDER = ''

const createImg = href => {
  const el = document.createElement('a')
  el.href = href
  return el
}

function getImageUrl (product, width) {
  const {image, provider} = product

  if (!provider) return IMAGE_PLACEHOLDER
  if (!image) return `/assets/img/provider/${provider}.jpg`

  const {hostname, pathname} = createImg(image)
  const baseUrl = `https://images.weserv.nl/?url=${hostname}${pathname}&trim`
  return width ? `${baseUrl}&w=${width}` : baseUrl
}

export default getImageUrl
