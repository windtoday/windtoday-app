import React from 'react'

import './style.scss'

import HomeProducts from '../HomeProducts'
import HomeFooter from '../HomeFooter'
import HomeHero from '../HomeHero'

export default () => (
  <main>
    <HomeHero />

    <section className='w-100 bg-grey-50 ph4 pt3'>
      <header className='pv4 f4 f3-ns fw3 avenir black ttc flex justify-between items-center'>
        <h3 className='ma0 avenir'>Browse Brands</h3>
        <a href='/pens/' className='link f5 blue-500 avenir'>View More →</a>
      </header>

      <div className='ph4'>
        <a className='f3 link hover-dark-blue b no-underline black dib pa2 ma2 pointer br2 fw5 blue-grey-400 bg-grey-200' href='http://mrmrs.io/gifolio'>North</a>
        <a className='f3 link b hover-blue no-underline black dib pa2 ma2 pointer br2 fw5 blue-grey-400 bg-grey-200' href='http://mrsjxn.com'>Gaastra</a>
        <a className='f3 link b hover-light-blue no-underline black dib pa2 ma2 pointer br2 fw5 blue-grey-400 bg-grey-200' href='http://prnt.cc'>Unifiber</a>
        <a className='f3 link b hover-green no-underline black dib pa2 ma2 pointer br2 fw5 blue-grey-400 bg-grey-200' href='http://mrmrs.io'>Fanatic</a>
        <a className='f3 link b hover-light-green no-underline black dib pa2 ma2 pointer br2 fw5 blue-grey-400 bg-grey-200' href='http://mrmrs.io/writing'>NeilPryde</a>
        <a className='f3 link b hover-yellow no-underline black dib pa2 ma2 pointer br2 fw5 blue-grey-400 bg-grey-200' href='http://cssstats.com'>Severne</a>
        <a className='f3 link b hover-gold no-underline black dib pa2 ma2 pointer br2 fw5 blue-grey-400 bg-grey-200' href='http://pesticide.io'>Starboard</a>
        <a className='f3 link b hover-orange no-underline black dib pa2 ma2 pointer br2 fw5 blue-grey-400 bg-grey-200' href='http://gfffs.com'>Tabou</a>

        <a className='f3 link b hover-light-red no-underline black dib pa2 ma2 pointer br2 fw5 blue-grey-400 bg-grey-200' href='http://github.com/mrmrs'>Loft</a>
        <a className='f3 link b hover-red no-underline black dib pa2 ma2 pointer br2 fw5 blue-grey-400 bg-grey-200' href='http://dribbble.com/mrmrs'>Naish</a>
        <a className='f3 link b hover-hot-pink no-underline black dib pa2 ma2 pointer br2 fw5 blue-grey-400 bg-grey-200' href='http://dribbble.com/mrmrs'>Select</a>
        <a className='f3 link b hover-pink no-underline black dib pa2 ma2 pointer br2 fw5 blue-grey-400 bg-grey-200' href='http://instagram.com/mrmrs_'>JP Australia</a>
        <a className='f3 link b hover-light-purple no-underline black dib pa2 ma2 pointer br2 fw5 blue-grey-400 bg-grey-200' href='http://unsplash.com/mrmrs'>MFC</a>
        <a className='f3 link b hover-purple no-underline black dib pa2 ma2 pointer br2 fw5 blue-grey-400 bg-grey-200' href='http://twitter.com/mrmrs_'>Goya</a>
        <a className='f3 link b hover-purple no-underline black dib pa2 ma2 pointer br2 fw5 blue-grey-400 bg-grey-200' href='http://twitter.com/mrmrs_'>Prolimit</a>
        <a className='f3 link b hover-purple no-underline black dib pa2 ma2 pointer br2 fw5 blue-grey-400 bg-grey-200' href='http://twitter.com/mrmrs_'>Exocet</a>
      </div>

      <div className='flex items-center justify-center pa4'>
        <a href='#0' className='f5 no-underline blue-500 bg-animate hover-bg-blue-500 hover-white inline-flex items-center pa3 ba border-box br2'>
          <span className='pr1'>See More Brands</span>
          <svg className='w1' data-icon='chevronRight' viewBox='0 0 32 32' style={{fill: 'currentColor'}}>
            <title>chevronRight icon</title>
            <path d='M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z' />
          </svg>
        </a>
      </div>
    </section>

    <HomeProducts
      title='Latest Products'
      subtitle='View more →'
      filters='NOT provider:totalwind'
      hitsPerPage={20}
    />

    <HomeFooter />
  </main>
)
