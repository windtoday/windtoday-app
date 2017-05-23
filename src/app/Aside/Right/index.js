import React from 'react'
import classnames from 'classnames'
import FacetsRight from '../../Facets/Right'

import './style.scss'

const theme = 'aside aside-right fl w-25-l w-95 vh-100 bg-grey-50 overflow-x-hidden overflow-y-scroll z-4 fixed'

function AsideRight (props) {
  const { get } = props

  const style = classnames(theme, {
    'aside-right--collapse': !get('asideRightOpen')
  })

  return (
    <aside data-app='aside-right' role='complementary' className={style}>
      <FacetsRight />
    </aside>
  )
}

export default AsideRight
