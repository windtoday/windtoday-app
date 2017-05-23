import React from 'react'

import IconWindFlagDown from '../Icon/windFlagDown'
import './style.scss'

import {createConnector} from 'react-instantsearch'

const NoHits = createConnector({
  displayName: 'NoHits',
  getProvidedProps (props, searchState, searchResults) {
    const noResults = searchResults.results ? searchResults.results.nbHits === 0 : false
    return {query: searchState.query, noResults}
  }
})(({noResults, query}) => {
  return (
    <article data-app='no-hits' className='no-hits tc pa4-l pa4'>
      <IconWindFlagDown className='w4 pv4' />
      <h1 className='no-break blue-300 f3'>
        <em>{query}</em>
      </h1>
      <h2 className='ph4 grey-500 f3'>
        has not been seen in the last days.
      </h2>
    </article>
  )
})

export default NoHits
