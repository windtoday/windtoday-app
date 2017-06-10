import Swipeable from 'react-swipeable'
import React from 'react'

import SearchFiltersRight from '../SearchFilters/Right'
import SearchFiltersLeft from '../SearchFilters/Left'
import SearchResults from '../SearchResults'

function Search (props) {
  const { toggle, get } = props

  const toggleSearchFiltersLeftOpen = toggle('searchFiltersLeftOpen')
  const toggleSearchFiltersRightOpen = toggle('searchFiltersRightOpen')

  function onSwipedRight () {
    const isAsideRightOpen = get('searchFiltersRightOpen')
    const isAsideLeftOpen = get('searchFiltersLeftOpen')

    if (isAsideLeftOpen) return
    if (!isAsideRightOpen) return toggleSearchFiltersLeftOpen()
    return toggleSearchFiltersRightOpen()
  }

  function onSwipedLeft () {
    const isAsideRightOpen = get('searchFiltersRightOpen')
    const isAsideLeftOpen = get('searchFiltersLeftOpen')

    if (isAsideRightOpen) return
    if (isAsideLeftOpen) return toggleSearchFiltersLeftOpen()
    return toggleSearchFiltersRightOpen()
  }

  return (
    <Swipeable
      stopPropagation
      onSwipedRight={onSwipedRight}
      onSwipedLeft={onSwipedLeft}
      role='main'
      data-app='app-main'
      >

      <SearchFiltersLeft {...props} />
      <SearchResults {...props} />
      <SearchFiltersRight {...props} />
    </Swipeable>
  )
}

export default Search
