import React from 'react'

// import Hits from '../Hits'
import NavBar from '../NavBar'

import {InstantSearch, Hits, Pagination} from 'react-instantsearch'

export default function Layout ({children}) {
  return (
    <InstantSearch className='cf' appId='latency' apiKey='6be0576ff61c053d5f9a3225e2a90f76' indexName='movies'>

      <article className='cf'>

        <NavBar />

        <div className='fl w-100 w-25-l bg-near-white tc vh-100'>
          <h2>Filters</h2>
        </div>
        <Hits />
        <div className='fl w-100 w-75-l bg-light-gray tc' />
      </article>

    </ InstantSearch>
  )
}
