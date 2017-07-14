import React from 'react'
import classnames from 'classnames'
import SearchFacetsLeft from '../../SearchFacets/Left'

import './style.scss'

const theme = 'search-filters search-filters-left fade-in fl w-30-l w-95 vh-100 bg-grey-50 overflow-x-hidden overflow-y-scroll z-4 fixed'

export default ({get}) => {
  const style = classnames(theme, {
    'search-filters-left--collapse': !get('searchFiltersLeftOpen')
  })

  return (
    <aside data-app='search-filters-left' role='complementary' className={style}>
      <SearchFacetsLeft />
    </aside>
  )
}
