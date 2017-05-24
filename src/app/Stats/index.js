import React, {PropTypes, createClass} from 'react'
import {connectStats} from 'react-instantsearch/connectors'

import CurrentRefinements from '../CurrentRefinements'
import './style.scss'

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
      <header data-app='stats' className='stats fade-in blue-grey-200 pl3 pt3 pr3 br2'>
        <div className='f6 code flex items-start items-center'>
          <span>{stats(nbHits, processingTimeMS)}</span>
        </div>
        <CurrentRefinements />
      </header>

    )
  }
})

export default connectStats(Stats)
