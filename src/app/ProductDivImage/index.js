import React from 'react'
import getImageUrl from '../util/get-image-url'

export default ({product, className, width, children}) => {
  const src = getImageUrl(product, width)

  const linearGradient = `linear-gradient(
    rgba(255, 255, 255, 0.1) 0%,
    rgba(0, 0, 0, 0.6) 100%
  )`

  const style = {
    background: `${linearGradient}, url("${src}") center center / cover no-repeat`
  }

  return (
    <div
      className={className}
      style={style}>
      {children}
    </div>
  )
}
