import React from 'react'

import AppBar from '../AppBar'
import AppWrapper from '../AppWrapper'

function Layout (props) {
  return (
    <main data-app='layout' className='cf helvetica'>
      <AppBar {...props} />
      <AppWrapper {...props} />
    </main>
  )
}

export default Layout
