/* global APP_VERSION */

import React from 'react'
import AlgoliaLogo from './AlgoliaLogo'

const PoweredBy = () =>
  <span>
    Powered by <a href='https://algolia.com' target='blank' className='link pointer'><AlgoliaLogo className='grow v-mid' style={{width: '48px'}} /></a>
  </span>

const Logo = () =>
  <img
    className='grow ph1'
    alt='windtoday'
    src='/assets/img/logo-tiny.png'
    style={{width: '34px'}}
  />

function Footer () {
  return (
    <footer className='pb4 pt3 moon-gray'>

      <small
        className='f6 db tc'>
        © 2016 <Logo /> v{APP_VERSION}
      </small>

      <small className='f6 db tc'><PoweredBy /></small>

      <div className='tc'>
        <a
          href='mailto:kiko@windtoday.co?subject=[windtoday]%20Report%20a%20Bug'
          title='Report a Bug'
          className='f6 dib ph2 link moon-gray hover-blue'>
          Report a Bug
        </a>

        <a
          href='mailto:kiko@windtoday.co?subject=[windtoday]%20Contact'
          title='Contact'
          className='f6 dib ph2 link moon-gray hover-blue'>
          Contact
        </a>

        <a
          href='mailto:kiko@windtoday.co?subject=[windtoday]%20Send%20Feedback'
          title='Send Feedback'
          className='f6 dib ph2 link moon-gray hover-blue'>
          Send Feedback
        </a>
      </div>
    </footer>
  )
}

export default Footer
