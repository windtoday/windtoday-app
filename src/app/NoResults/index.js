import React from 'react'

function NoResults ({query}) {
  return (
    <section className='ph3 ph7-l vh-100'>
      <h1>
        No results found matching for &#039;<span>{query}</span>&#039;.
      </h1>
    </section>
  )
}

export default NoResults
