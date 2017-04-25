import React, {PropTypes, createClass} from 'react'
import {connectStats} from 'react-instantsearch/connectors'

import CurrentRefinements from '../CurrentRefinements'

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
      <header data-app='stats' className='fade-in blue-grey-200 pa3'>
        <CurrentRefinements />
        <div className='pt3 f5 code flex items-start items-center'>
          <span>{stats(nbHits, processingTimeMS)}</span>
        </div>
      </header>

    )
  }
})

export default connectStats(Stats)
