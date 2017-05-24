import React from 'react'

import './style.scss'

const style = 'badge f6 fw4 blue-grey-400 bg-grey-200 br2'

function Badge (props) {
  const {children, className, iconComponent} = props

  return (
    <span className={`${className} ${style}`}>
      {iconComponent && <span className='badge__icon mr1'>{iconComponent}</span>}
      {children}
    </span>

  )
}

export default Badge
