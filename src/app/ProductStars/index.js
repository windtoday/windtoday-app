import classnames from 'classnames'
import React from 'react'

import IconStar from 'react-icons/lib/md/star'
import './style.scss'

const MAX_STARS = 5

export default ({product, className, tiny}) => {
  const {priceScore: activeStars} = product
  const emptyStars = MAX_STARS - activeStars
  const stars = []
  let starKey = 0

  if (tiny) {
    return (
      <span className={classnames('flex items-center', className)}>
        <span>{activeStars}</span>
        <IconStar className='product__star' />
      </span>
    )
  }

  for (let i = 0; i < activeStars; i++) {
    stars.push(
      <IconStar key={++starKey} className='product__star' />
      )
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <IconStar key={++starKey} className='product__star product__star--empty' />
      )
  }

  return <span className={className}>{stars}</span>
}
