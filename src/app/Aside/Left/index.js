import React from 'react'
import classnames from 'classnames'
import FacetsLeft from '../../Facets/Left'

import './style.scss'

const theme = 'Aside AsideLeft fl w-100 w-25-l vh-100 bg-white overflow-x-hidden overflow-y-scroll z-1'

function AsideLeft (props) {
  const { get } = props

  const style = classnames(theme, {
    'AsideLeft__collapse': !get('asideLeftOpen')
  })

  return (
    <aside data-app='aside-left' className={style}>
      <FacetsLeft />
    </aside>
  )
}

export default AsideLeft
