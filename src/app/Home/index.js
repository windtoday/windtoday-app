import React from 'react'

import './style.scss'

import HomeProducts from '../HomeProducts'
import Header from './Header'
import Footer from './Footer'

export default () => (
  <div>
    <Header />

    <HomeProducts
      title='Feature Sails'
      subtitle='View more sails →'
      filters='category:sails AND provider:lpwind'
      hitsPerPage={3}
    />

    <HomeProducts
      title='Feature Sails'
      subtitle='View more sails →'
      filters='category:sails AND provider:wewind'
      hitsPerPage={3}
    />

    <Footer />
  </div>
)
