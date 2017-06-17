import React, {PropTypes, createClass} from 'react'
import {connectStats} from 'react-instantsearch/connectors'

import SearchCurrentFilters from '../SearchCurrentFilters'
import SwitchView from '../SwitchView'

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
      <header data-app='search-stats' className='fade-in blue-grey-200 pt4 ph5-l ph3 br2'>
        <div>
          <span className='code f6'>{stats(nbHits, processingTimeMS)}</span>
          <SwitchView {...props} />
        </div>
        <SearchCurrentFilters />
      </header>
    )
  }
})

export default connectStats(Stats)
