/* global APP_VERSION */

import React from 'react'

import PoweredBy from './PoweredBy'
import Social from './Social'
import Links from './Links'
import Logo from './Logo'

function Footer () {
  return (
    <footer className='pa3 moon-gray'>

      <small
        className='f6 db tc'>
        © 2016 <Logo /> v{APP_VERSION}
      </small>

      <div style={{'paddingTop': '20px'}}>
        <Social />
      </div>

      <small className='f6 db tc'>
        <PoweredBy />
      </small>

      <Links />

    </footer>
  )
}

export default Footer
