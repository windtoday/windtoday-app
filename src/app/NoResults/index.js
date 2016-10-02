import React from 'react'

function NoResults ({query}) {
  return (
    <div className='results-wrapper'>
      <div className='no-results'>
        No results found matching <span className='query'>{query}</span>
      </div>
    </div>
  )
}

export default NoResults
