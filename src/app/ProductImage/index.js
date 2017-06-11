import React from 'react'

const createImg = href => {
  const el = document.createElement('a')
  el.href = href
  return el
}

function getImageUrl (product, width) {
  const {image, provider} = product
  if (!image) return `/assets/img/provider/${provider}.jpg`

  const {hostname, pathname} = createImg(image)
  const baseUrl = `https://images.weserv.nl/?url=${hostname}${pathname}`

  return width ? `${baseUrl}&w=${width}` : baseUrl
}

export default ({product, className, width}) => (
  <img alt={product.title} src={getImageUrl(product, width)} className={className} />
)
