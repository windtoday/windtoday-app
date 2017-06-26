import classnames from 'classnames'
import React from 'react'

import IconStar from '../Icon/star'
import './style.scss'

const MAX_STARS = 5

const Star = ({key, className}) =>
  <IconStar
    key={key}
    className={`product__star ${className}`}
    width='16'
    height='16'
  />

export default ({product, className, tiny}) => {
  const {priceScore: activeStars} = product
  const emptyStars = MAX_STARS - activeStars
  const stars = []
  let starKey = 0

  if (tiny) {
    return (
      <span className={classnames('flex items-center', className)}>
        <span className='pr1'>{activeStars}</span>
        <Star />
      </span>
    )
  }

  for (let i = 0; i < activeStars; i++) stars.push(<Star key={++starKey} />)
  for (let i = 0; i < emptyStars; i++) stars.push(<Star key={++starKey} className='product__star--empty' />)

  return <span className={className}>{stars}</span>
}
