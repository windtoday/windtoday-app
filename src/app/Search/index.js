import Swipeable from 'react-swipeable'
import React, {createClass} from 'react'

import SearchFiltersRight from '../SearchFilters/Right'
import SearchFiltersLeft from '../SearchFilters/Left'
import SearchResults from '../SearchResults'

const Search = createClass({
  componentWillMount () {
    if (this.props.location.pathname !== '/search') {
      this.props.history.push('/search')
    }
  },

  onSwipedRight () {
    const {get, toggle} = this.props

    const isAsideRightOpen = get('searchFiltersRightOpen')
    const isAsideLeftOpen = get('searchFiltersLeftOpen')

    const toggleSearchFiltersLeftOpen = toggle('searchFiltersLeftOpen')
    const toggleSearchFiltersRightOpen = toggle('searchFiltersRightOpen')

    if (isAsideLeftOpen) return
    if (!isAsideRightOpen) return toggleSearchFiltersLeftOpen()
    return toggleSearchFiltersRightOpen()
  },

  onSwipedLeft () {
    const {get, toggle} = this.props

    const isAsideRightOpen = get('searchFiltersRightOpen')
    const isAsideLeftOpen = get('searchFiltersLeftOpen')

    const toggleSearchFiltersLeftOpen = toggle('searchFiltersLeftOpen')
    const toggleSearchFiltersRightOpen = toggle('searchFiltersRightOpen')

    if (isAsideRightOpen) return
    if (isAsideLeftOpen) return toggleSearchFiltersLeftOpen()
    return toggleSearchFiltersRightOpen()
  },

  render () {
    const {onSwipedRight, onSwipedLeft, props} = this

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
})

export default Search
