import classnames from 'classnames'
import React from 'react'

import IconStar from '../Icon/star'

import './style.scss'

const Star = ({key, className}) =>
  <IconStar
    key={key}
    className={`product__star ${className}`}
    width='16'
    height='16'
  />

export default ({product, className, tiny}) => {
  const {priceScore: activeStars} = product

  return (
    <span className={classnames('flex items-center', className)}>
      <span className='pr1'>{activeStars}</span>
      <Star />
    </span>
  )
}
