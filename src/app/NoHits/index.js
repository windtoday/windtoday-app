import React from 'react'

function NoHits ({query}) {
  return (
    <article data-app='no-hits' className='tc pa4-l pa3 vh-100'>
      <h1>
        No hits found matching for <span className='blue'>{query}</span>.
      </h1>
    </article>
  )
}

export default NoHits
