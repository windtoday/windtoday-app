import {connectInfiniteHits} from 'react-instantsearch/connectors'
import {createConnector} from 'react-instantsearch'
import createClass from 'create-react-class'
import React, {createElement} from 'react'
import classnames from 'classnames'

import SearchNoHits from '../SearchNoHits'
import ProductsGrid from '../ProductsGrid'
import Overlay from '../Overlay'
import Footer from '../Footer'

const Results = createClass({
  componentWillMount () {
    this.props.set('onSearchClear', () => {
      const el = this.results
      el.scrollTop = 0
    })
  },
  render () {
    const {get, noResults, loading} = this.props
    const isAsideRightOpen = get('searchFiltersRightOpen')
    const isAsideLeftOpen = get('searchFiltersLeftOpen')
    const hasAsideOpen = isAsideLeftOpen || isAsideRightOpen
    const isDesktop = get('isDesktop')

    const className = classnames('search-results fl vh-100 bg-grey-50 w-100', {
      'fixed': hasAsideOpen
    })

    return (
      <main
        ref={node => (this.results = node)}
        data-app='search-results'
        className={className}>
        <Overlay active={hasAsideOpen} />
        {createElement(!loading && noResults ? SearchNoHits : ProductsGrid, {
          stats: true,
          ...this.props
        })}
        {isDesktop && <Footer />}
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
    const noResults = nbHits ? nbHits === 0 : true
    const loading = nbHits == null

    return {query, noResults, loading}
  }
})(connectInfiniteHits(Results))
