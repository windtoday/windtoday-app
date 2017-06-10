import React, {PropTypes, createClass} from 'react'
import {connectStats} from 'react-instantsearch/connectors'

import SearchCurrentFilters from '../SearchCurrentFilters'

const Stats = createClass({
  propTypes: {
    nbHits: PropTypes.number.isRequired,
    processingTimeMS: PropTypes.number.isRequired
  },

  stats (n, ms) {
    return `${n.toLocaleString()} results found in ${ms.toLocaleString()}ms`
  },

  render () {
    const {props, stats} = this
    const {nbHits, processingTimeMS} = props

    return (
      <header data-app='search-stats' className='fade-in blue-grey-200 pl3 pt4 pr3 br2'>
        <div className='f6 code flex items-start items-center'>
          <span>{stats(nbHits, processingTimeMS)}</span>
        </div>
        <SearchCurrentFilters />
      </header>

    )
  }
})

export default connectStats(Stats)
