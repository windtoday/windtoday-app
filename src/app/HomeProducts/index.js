import React from 'react'
import { connectHits } from 'react-instantsearch/connectors'
import { Configure, InstantSearch } from 'react-instantsearch/dom'

import ProductsGrid from '../ProductsGrid'

const RenderHits = ({hits: products, title, subtitle}) => {
  return (
    <section className='w-100 bg-grey-50 ph4'>
      <header className='pv4 f4 f3-ns fw3 avenir black ttc flex justify-between items-center'>
        <h3 className='ma0 avenir'>{title}</h3>
        <a href='/pens/' className='link f5 blue-500 avenir'>{subtitle}</a>
      </header>
      <ProductsGrid products={products} />

      <div className='flex items-center justify-center pa4'>
        <a href='#0' className='f5 no-underline blue-500 bg-animate hover-bg-blue-500 hover-white inline-flex items-center pa3 ba border-box br2'>
          <span className='pr1'>See More Products</span>
          <svg className='w1' data-icon='chevronRight' viewBox='0 0 32 32' style={{fill: 'currentColor'}}>
            <title>chevronRight icon</title>
            <path d='M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z' />
          </svg>
        </a>
      </div>
    </section>
  )
}

const HomeProducts = connectHits(RenderHits)

export default ({title, subtitle, filters, hitsPerPage}) => (
  <InstantSearch
    appId='PDZK7H6PD0'
    apiKey='911167d1e62d76e16e9cd746c0b1a684'
    indexName='windsurf'
    >
    <Configure filters={filters} hitsPerPage={hitsPerPage} />
    <HomeProducts title={title} subtitle={subtitle} />
  </InstantSearch>
)
