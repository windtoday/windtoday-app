import React from 'react'
import { createConnector } from 'react-instantsearch'
import classnames from 'classnames'

import Hits from '../Hits'
import NoResults from '../NoResults'

import './style.scss'

const ResultsConnector = createConnector({
  displayName: 'Results',

  getProps (props, state, search) {
    const { toggle, get } = props
    const noResults = search.results ? search.results.nbHits === 0 : false

    const theme = 'fl w-100 bg-white vh-100 overflow-x-hidden overflow-y-scroll'

    const style = classnames(theme, {
      'results-expand': get('facetsOpen')
    })

    return {query: state.q, noResults, style}
  }
})(({noResults, query, style}) => {
  return (
    <section data-app='results' className={style}>
      {noResults
        ? <NoResults query={query} />
        : <Hits hitsPerPage={10} />
      }
    </section>
  )
})

export default ResultsConnector
