import React from 'react'
import { createConnector } from 'react-instantsearch'
import classnames from 'classnames'

import Hits from '../Hits'
import NoHits from '../NoHits'

import './style.scss'

const ResultsConnector = createConnector({
  displayName: 'Results',

  getProps (props, state, search) {
    const { toggle, get } = props
    const noResults = search.results ? search.results.nbHits === 0 : false
    const theme = 'fl w-100 bg-white vh-100 overflow-x-hidden overflow-y-scroll'
    const nbPages = search.results && search.results.nbPages || 0
    const style = classnames(theme, {
      'results-expand': get('facetsOpen')
    })
    return {query: state.q, noResults, nbPages, style, toggle, get}
  }
})(({noResults, query, style, nbPages, toggle, get}) => {
  return (
    <section data-app='results' className={style}>
      {noResults
      ? <NoHits query={query} />
      : <Hits toggle={toggle} get={get} nbPages={nbPages} hitsPerPage={10} />
      }
    </section>
  )
})

export default ResultsConnector
