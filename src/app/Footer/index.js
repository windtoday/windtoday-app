/* global APP_VERSION */

import React from 'react'

import Links from './Links'
import Logo from './Logo'

export default () => (
  <footer
    data-app='footer'
    role='contentinfo'
    className='tc pv3 fixed left-0 bottom-0 bg-grey-50 w-100'
    >

    <small
      className='pb2 f7 db flex items-center justify-center blue-grey-200'>
        © 2017 <Logo /> v{APP_VERSION}
    </small>

    <div className=''>
      <Links />
    </div>

  </footer>
  )
