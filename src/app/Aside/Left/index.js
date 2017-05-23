import React from 'react'
import classnames from 'classnames'
import FacetsLeft from '../../Facets/Left'

import './style.scss'

const theme = 'aside aside-left fl w-25-l w-95 vh-100 bg-grey-50 overflow-x-hidden overflow-y-scroll z-4 fixed'

function AsideLeft (props) {
  const { get } = props

  const style = classnames(theme, {
    'aside-left--collapse': !get('asideLeftOpen')
  })

  return (
    <aside data-app='aside-left' role='complementary' className={style}>
      <FacetsLeft />
    </aside>
  )
}

export default AsideLeft
