import React from 'react'
import {InstantSearch} from 'react-instantsearch'

import Header from '../Header'
import Results from '../Results'
import Facets from '../Facets'

function Layout ({children}) {
  return (
    <main className='cf'>
      <Header />
      <Facets />
      <Results />
    </main>
  )
}

export default Layout
