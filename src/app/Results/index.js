import React from 'react'
import classnames from 'classnames'

import connectorResults from './connector'
import Hits from '../Hits'
import NoHits from '../NoHits'
import './style.scss'

const theme = 'fl w-100 bg-white vh-100 overflow-x-hidden overflow-y-scroll'

function Results ({hasResults, query, hasMore, toggle, get, refine, hits}) {
  const props = { toggle, get, hasMore, refine, hits, query }

  const style = classnames(theme, {
    'results-expand': get('facetsOpen')
  })

  return (
    <section data-app='results' className={style}>
      {hasResults ? <Hits {...props} /> : <NoHits {...props} />}
    </section>
  )
}

export default connectorResults(Results)
