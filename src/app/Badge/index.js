import React from 'react'

import './style.scss'

const theme = 'badge b ttu amber-500 pl1'

function Badge (props) {
  const {children} = props

  return (
    <span className={theme}>{children}</span>
  )
}

export default Badge
