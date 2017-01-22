import React from 'react'
import classnames from 'classnames'

import './style.scss'

const theme = 'AsideLeft fl w-100 w-25-l vh-100 bg-white overflow-x-hidden overflow-y-scroll z-1'

function AsideLeft (props) {
  console.log(props)
  const { get } = props

  const style = classnames(theme, {
    'AsideLeft__collapse': !get('facetsOpen')
  })

  return (
    <aside data-app='aside-left' className={style} {...props} />
  )
}

export default AsideLeft
