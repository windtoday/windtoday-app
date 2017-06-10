import React from 'react'

function getImageUrl ({image, provider}) {
  if (!image) return `/assets/img/provider/${provider}.jpg`
  const el = document.createElement('a')
  el.href = image
  return `https://images.weserv.nl/?url=${el.hostname}${el.pathname}&w=96&t=fit`
}

export default ({product, className}) => (
  <img alt={product.title} src={getImageUrl(product)} className={className} />
)
