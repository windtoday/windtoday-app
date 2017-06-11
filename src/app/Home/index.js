import React from 'react'

import './style.scss'

import HomeProducts from '../HomeProducts'
import Header from './Header'
import Footer from './Footer'

export default () => (
  <main>
    <Header />

    <HomeProducts
      title='Latest Products'
      subtitle='View more →'
      filters='NOT provider:totalwind'
      hitsPerPage={20}
    />

    <Footer />
  </main>
)
