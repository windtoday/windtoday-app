import Swipeable from 'react-swipeable'
import React from 'react'

import SearchFiltersRight from '../SearchFilters/Right'
import SearchFiltersLeft from '../SearchFilters/Left'
import SearchResults from '../SearchResults'

function Search (props) {
  const { toggle, get } = props

  const toggleAsideLeftOpen = toggle('asideLeftOpen')
  const toggleAsideRightOpen = toggle('asideRightOpen')

  function onSwipedRight () {
    const isAsideRightOpen = get('asideRightOpen')
    const isAsideLeftOpen = get('asideLeftOpen')

    if (isAsideLeftOpen) return
    if (!isAsideRightOpen) return toggleAsideLeftOpen()
    return toggleAsideRightOpen()
  }

  function onSwipedLeft () {
    const isAsideRightOpen = get('asideRightOpen')
    const isAsideLeftOpen = get('asideLeftOpen')

    if (isAsideRightOpen) return
    if (isAsideLeftOpen) return toggleAsideLeftOpen()
    return toggleAsideRightOpen()
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
