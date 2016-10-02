import React from 'react'
import { createConnector } from 'react-instantsearch'

import Hits from '../Hits'
import NoResults from '../NoResults'

const Results = createConnector({
  displayName: 'Results',

  getProps (props, state, search) {
    const noResults = search.results ? search.results.nbHits === 0 : false
    return {query: state.q, noResults}
  }
})(({noResults, query}) => {
  return (noResults ? <NoResults query={query} /> : <Hits />)
})

export default Results
