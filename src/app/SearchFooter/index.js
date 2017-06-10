/* global APP_VERSION */

import React from 'react'

import PoweredBy from './PoweredBy'
import Social from './Social'
import Links from './Links'
import Logo from './Logo'

export default () => (
  <footer
    data-app='footer'
    role='contentinfo'
    className='tc pv4 blue-grey-200'
    >

    <small className='pb3 f6 db'>
      <PoweredBy />
    </small>

    <small
      className='pb3 f6 db'>
        © 2016-2017 <Logo /> v{APP_VERSION}
    </small>

    <div className='pb3'>
      <Links />
    </div>

    <div className='pt1'>
      <Social />
    </div>

  </footer>
  )
