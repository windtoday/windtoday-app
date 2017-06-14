import classnames from 'classnames'
import React from 'react'

import IconEuro from 'react-icons/lib/md/euro-symbol'

export default ({product, className}) => {
  const {price} = product

  return (
    <span className={classnames('flex items-center', className)}>
      <span>{price}</span>
      <IconEuro />
    </span>
  )
}
