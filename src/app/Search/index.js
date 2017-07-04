import createClass from 'create-react-class'
import Swipeable from 'react-swipeable'
import classnames from 'classnames'
import React from 'react'

import SearchFiltersRight from '../SearchFilters/Right'
import SearchFiltersLeft from '../SearchFilters/Left'
import SearchResults from '../SearchResults'

import './style.scss'

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
    const {location, get} = props
    const isFallback = location.pathname === '/search' && get('isDesktop')

    return (
      <Swipeable
        stopPropagation
        onSwipedRight={onSwipedRight}
        onSwipedLeft={onSwipedLeft}
        role='main'
        data-app='search'
        className={classnames({
          'search--fallback': isFallback
        })}
        >
        <SearchFiltersLeft {...props} />
        <SearchResults {...props} />
        <SearchFiltersRight {...props} />
      </Swipeable>
    )
  }
})

export default Search
