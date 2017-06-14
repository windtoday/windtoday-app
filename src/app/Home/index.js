import React from 'react'

import './style.scss'

import HomeProducts from '../HomeProducts'
import HomeFooter from '../HomeFooter'
import HomeHero from '../HomeHero'

export default () => (
  <main>
    <HomeHero />

    <HomeProducts
      filters=''
      hitsPerPage={20}
    />

    <HomeFooter />
  </main>
)
