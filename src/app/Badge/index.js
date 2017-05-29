import React from 'react'
import classnames from 'classnames'

import './style.scss'

function Badge (props) {
  const {active, children, className, iconComponent} = props

  const style = classnames('badge f6 fw4 br2', {
    'blue-grey-400 bg-grey-200': !active,
    'white bg-blue-grey-300': active
  }, className)

  return (
    <span className={style}>
      {iconComponent && <span className='badge__icon mr1'>{iconComponent}</span>}
      {children}
    </span>

  )
}

export default Badge
