import IconEuro from 'react-icons/lib/md/euro-symbol'
import React from 'react'

export default ({product, className}) => {
  const {price} = product

  return (
    <span className={className}>
      <span>{price}</span>
      <IconEuro />
    </span>
  )
}
