import React from 'react'
import AlgoliaLogo from './AlgoliaLogo'

const PoweredBy = () =>
  <span>
    Powered by <a href='https://algolia.com' target='blank' className='link pointer'><AlgoliaLogo className='grow v-mid' style={{width: '48px'}} /></a>
  </span>

const Logo = () =>
  <img
    className='grow ph1'
    src='/assets/img/logo-tiny.png'
    style={{width: '34px'}}
  />

function Footer () {
  return (
    <footer className='pv4 light-gray'>

      <small
        className='f6 db tc'>
        © 2016 <Logo /> v{APP_VERSION}
      </small>

      <small className='f6 db tc'><PoweredBy /></small>

      <div className='tc'>
        <a
          href='/language/'
          title='Language'
          className='f6 dib ph2 link light-gray hover-blue'>
          Language
        </a>

        <a
          href='/terms/'
          title='Terms'
          className='f6 dib ph2 link light-gray hover-blue'>
          Terms of Use
        </a>

        <a
          href='/privacy/'
          title='Privacy'
          className='f6 dib ph2 link light-gray hover-blue'>
          Privacy
        </a>
      </div>
    </footer>
  )
}

export default Footer
