import {connectInfiniteHits} from 'react-instantsearch/connectors'
import React, {createElement, createClass} from 'react'
import classnames from 'classnames'

import Overlay from '../Overlay'
import SearchFooter from '../SearchFooter'
import SearchNoHits from '../SearchNoHits'
import SearchHits from '../SearchHits'

import './style.scss'

const Results = createClass({
  render () {
    const {props} = this
    const {set, get, hits} = props

    const hasResults = hits.length > 0
    const isAsideRightOpen = get('searchFiltersRightOpen')
    const isAsideLeftOpen = get('searchFiltersLeftOpen')
    const hasAsideOpen = isAsideLeftOpen || isAsideRightOpen
    const isDesktop = get('isDesktop')
    const isMobile = get('isMobile')

    const theme = 'results fl vh-100 bg-grey-50 overflow-x-hidden overflow-y-scroll'

    const style = classnames(theme, {
      'results--expand': isAsideLeftOpen,
      'w-75': isDesktop && isAsideRightOpen,
      'w-100': (isDesktop && !isAsideRightOpen) || isMobile
    })

    set('onSearchClear', () => {
      set('isSearching', false)
      const el = this.refs.results
      el.scrollTop = 0
    })

    return (
      <section
        ref='results'
        data-app='search-results' className={style}>
        {isMobile && <Overlay active={hasAsideOpen} />}
        {createElement(hasResults ? SearchHits : SearchNoHits, props)}
        <SearchFooter />
      </section>
    )
  }
})

export default connectInfiniteHits(Results)
