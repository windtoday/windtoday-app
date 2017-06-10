import React from 'react'
import classnames from 'classnames'
import SearchFacetsRight from '../../SearchFacets/Right'

import './style.scss'

const theme = 'search-filters search-filters-right fade-in fl w-25-l w-95 vh-100 bg-grey-50 overflow-x-hidden overflow-y-scroll z-4 fixed'

function AsideRight (props) {
  const { get } = props

  const style = classnames(theme, {
    'search-filters-right--collapse': !get('asideRightOpen')
  })

  return (
    <aside data-app='search-filters-right' role='complementary' className={style}>
      <SearchFacetsRight />
    </aside>
  )
}

export default AsideRight
