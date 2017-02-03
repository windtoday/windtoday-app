import React from 'react'
import classnames from 'classnames'

import './style.scss'

const theme = 'badge sans-serif bg-gold ttu white br1 ml1 relative'

function Badge (props) {
  const {isHover, children} = props

  const style = classnames(theme, {
    'badge--hover': isHover
  })

  return (
    <span className={style}>{children}</span>
  )
}

export default Badge
