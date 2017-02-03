import React from 'react'
import classnames from 'classnames'
import FacetsLeft from '../../Facets/Left'

import './style.scss'

const theme = 'aside aside-left shadow-1 fl w-25-l w-95 vh-100 bg-white overflow-x-hidden overflow-y-scroll z-4'

function AsideLeft (props) {
  const { get } = props

  const style = classnames(theme, {
    'aside-left--collapse': !get('asideLeftOpen')
  })

  return (
    <aside data-app='aside-left' className={style}>
      <FacetsLeft />
    </aside>
  )
}

export default AsideLeft
