import React from 'react'

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
