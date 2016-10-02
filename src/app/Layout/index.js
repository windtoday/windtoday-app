import React from 'react'
import {InstantSearch} from 'react-instantsearch'

import Header from '../Header'
import Hits from '../Hits'

function Layout ({children}) {
  return (
    <InstantSearch className='cf' appId='latency' apiKey='6be0576ff61c053d5f9a3225e2a90f76' indexName='ikea'>

      <main className='cf'>

        <Header />

        <aside className='fl w-100 w-25-l bg-near-white tc vh-100'>
          <h2>Filters</h2>
        </aside>

        <article className='fl w-100 w-75-l bg-light-gray'>
          <Hits />
        </article>

      </main>

    </ InstantSearch>
  )
}

export default Layout
