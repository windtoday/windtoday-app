import React from 'react'

import HomeProducts from '../HomeProducts'
import Footer from '../Footer'
import HomeHero from '../HomeHero'

export default ({get}) => (
  <main>
    <HomeHero />

    <HomeProducts
      filters=''
      hitsPerPage={get('hitsPerPage')}
    />

    <Footer />
  </main>
)
