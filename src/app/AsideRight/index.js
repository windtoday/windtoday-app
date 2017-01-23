import React from 'react'
import classnames from 'classnames'

import './style.scss'

const theme = 'AsideRight fl w-100 w-25-l vh-100 bg-white overflow-x-hidden overflow-y-scroll z-1'

function AsideRight (props) {
  const { get, children } = props

  const style = classnames(theme, {
    'AsideRight__collapse': !get('asideRightOpen')
  })

  return (
    <aside data-app='aside-right' className={style}>
      {children}
    </aside>
  )
}

export default AsideRight
