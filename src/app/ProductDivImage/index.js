import React from 'react'
import getImageUrl from '../util/get-image-url'

export default ({product, className, width, children}) => {
  const src = getImageUrl(product, width)

  const linearGradient = `linear-gradient(
    rgba(0, 0, 0, 0.2) 20%,
    rgba(0, 0, 0, 0.7) 100%
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
