import React from 'react'
import classnames from 'classnames'

import connectorResults from './connector'
import Hits from '../Hits'
import NoHits from '../NoHits'
import './style.scss'

const theme = 'fl w-100 bg-white vh-100 overflow-x-hidden overflow-y-scroll'

const Hit = ({item, hasMore, refine}) => {
  return (
    <p>{item.title}</p>
  )
}

function footer (refine) {
  return (
    <footer className='tc pv3 pv4-l'>
      <a
        onClick={refine}
        className='pointer f6 link dim br2 ba ph3 pv2 mb2 dib blue'>
        Load more
      </a>
    </footer>
  )
}

function Results ({hasResults, query, hasMore, toggle, get, refine, hits}) {
  const props = { toggle, get, hasMore, refine, hits }

  const style = classnames(theme, {
    'results-expand': get('facetsOpen')
  })

  return (
    <section data-app='results' className={style}>
      <Hits {...props} />
      {hasMore && footer(refine)}
    </section>
  )
}

export default connectorResults(Results)
