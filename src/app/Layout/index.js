import React from 'react'

import Results from '../Results'
import AppBar from '../AppBar'
import Facets from '../Facets'

function Layout ({children}) {
  return (
    <main className='cf helvetica'>
      <AppBar />
      <Facets />
      <Results />
    </main>
  )
}

export default Layout
