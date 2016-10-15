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
  return (
    <aside className='fl w-100 w-75-l bg-white'>
      {noResults
        ? <NoResults query={query} />
        : <Hits hitsPerPage={10} />
      }
    </aside>
  )
})

export default Results
