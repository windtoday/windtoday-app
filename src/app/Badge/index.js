import React from 'react'

const theme = 'b ttu amber-500 pl1 v-mid f7'

function Badge (props) {
  const {children} = props

  return (
    <span className={theme}>{children}</span>
  )
}

export default Badge
