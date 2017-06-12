import React from 'react'
import { connectHits } from 'react-instantsearch/connectors'
import { Configure, InstantSearch } from 'react-instantsearch/dom'

import ProductsGrid from '../ProductsGrid'

const RenderHits = ({hits: products, title, subtitle}) => {
  return (
    <section className='w-100 bg-grey-50'>
      <div className='pv4 ph3 f4 f3-ns fw3 avenir black ttc flex justify-between items-center'>
        <h3 className='ma0 avenir'>{title}</h3>
        <a href='/pens/' className='link f5 blue-500 avenir'>{subtitle}</a>
      </div>
      <ProductsGrid products={products} />
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
