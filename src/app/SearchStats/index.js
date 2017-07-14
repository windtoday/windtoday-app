import {connectStats} from 'react-instantsearch/connectors'
import createClass from 'create-react-class'
import PropTypes from 'prop-types'
import React from 'react'

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
      <header data-app='search-stats' className='fade-in blue-grey-200 ph3 ph5-m ph6-l pt4 br2'>
        <div>
          <span className='code f6'>{stats(nbHits, processingTimeMS)}</span>
        </div>
        <SearchCurrentFilters />
      </header>
    )
  }
})

export default connectStats(Stats)
