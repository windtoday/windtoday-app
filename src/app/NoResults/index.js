import React from 'react'

function NoResults ({query}) {
  return (
    <article data-app='no-results' className='tc pv4-l pv3 vh-100'>
      <h1>
        No results found matching for <span className='blue'>{query}</span>.
      </h1>
    </article>
  )
}

export default NoResults
