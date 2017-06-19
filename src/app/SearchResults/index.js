import {connectInfiniteHits} from 'react-instantsearch/connectors'
import {createConnector} from 'react-instantsearch'
import createClass from 'create-react-class'
import React, {createElement} from 'react'
import classnames from 'classnames'

import SearchNoHits from '../SearchNoHits'
import SearchHits from '../SearchHits'
import Overlay from '../Overlay'
import Footer from '../Footer'

import './style.scss'

const Results = createClass({
  componentWillMount () {
    this.props.set('onSearchClear', () => {
      const el = this.results
      el.scrollTop = 0
    })
  },
  render () {
    const {get, hits, noResults} = this.props
    const hitsPerPage = get('hitsPerPage')
    const products = hits.length > 0 ? hits : Array(hitsPerPage).fill({})

    const isAsideRightOpen = get('searchFiltersRightOpen')
    const isAsideLeftOpen = get('searchFiltersLeftOpen')
    const hasAsideOpen = isAsideLeftOpen || isAsideRightOpen
    const isDesktop = get('isDesktop')
    const isMobile = get('isMobile')

    const className = classnames('search-results fl vh-100 bg-grey-50 overflow-x-hidden overflow-y-scroll', {
      'fixed': hasAsideOpen,
      'search-results--expand': isAsideLeftOpen,
      'w-80': isDesktop && isAsideRightOpen,
      'w-100': (isDesktop && !isAsideRightOpen) || isMobile
    })

    return (
      <main
        ref={node => (this.results = node)}
        data-app='search-results'
        className={className}>
        {isMobile && <Overlay active={hasAsideOpen} />}
        {createElement(noResults
          ? SearchNoHits
          : SearchHits, {
            ...this.props,
            hits: products
          })}
        <Footer />
      </main>
    )
  }
})

export default createConnector({
  displayName: 'SearchResults',
  getProvidedProps (props, searchState, searchResults) {
    const {query} = searchState
    const results = searchResults.results || {}
    const {nbHits} = results
    const noResults = nbHits ? nbHits === 0 : false

    return {query, noResults}
  }
})(connectInfiniteHits(Results))
