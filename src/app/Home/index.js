import React from 'react'

import './style.scss'

import HomeProducts from '../HomeProducts'
import Header from './Header'
import Footer from './Footer'

export default () => (
  <main>
    <Header />

    <section className='w-100 bg-grey-50 ph4'>
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
    </section>

    <HomeProducts
      title='Latest Products'
      subtitle='View more →'
      filters='NOT provider:totalwind'
      hitsPerPage={20}
    />

    <Footer />
  </main>
)
