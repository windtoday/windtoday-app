import React from 'react'
import getImageUrl from '../util/get-image-url'

export default ({product, className, width}) => (
  <img alt={product.title} src={getImageUrl(product, width)} className={className} />
)
