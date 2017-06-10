import React from 'react'

import IconStar from 'react-icons/lib/md/star'
import './style.scss'

const MAX_STARS = 5

export default ({product}) => {
  const {priceScore: activeStars} = product
  const emptyStars = MAX_STARS - activeStars
  const stars = []
  let starKey = 0

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

  return <div>{stars}</div>
}
