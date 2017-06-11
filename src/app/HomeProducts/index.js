import React from 'react'
import { connectHits } from 'react-instantsearch/connectors'
import { Configure, InstantSearch } from 'react-instantsearch/dom'

import ProductCard from '../ProductCard'

const RenderHits = ({hits: products, title, subtitle}) => {
  return (
    <article className='pv4 w-100 bg-white ph6'>
      <div className='f2 fw6 pt3 pb2 bb b--blue-500 black ttc bw2 flex justify-between items-center'>
        <h3 className='ma0 avenir'>{title}</h3>
        <a href='/pens/' className='link f5 blue-500 avenir'>{subtitle}</a>
      </div>
      <div className='pt3 flex justify-around'>
        {products.map((product, index) =>
          <ProductCard key={index} product={product} />
        )}
      </div>
    </article>
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
