import React from 'react'
import getImageUrl from '../util/get-image-url'

export default ({product, className, width}) => {
  const src = getImageUrl(product, width)

  const linearGradient = `linear-gradient(
    rgba(144, 158, 165, 0),
    rgba(144, 158, 165,0.7),
    rgb(144, 158, 165)
  )`

  const style = {
    background: `url("${src}") center center / cover no-repeat`
  }

  return (
    <div
      className={className}
      style={style}
      />
  )
}
