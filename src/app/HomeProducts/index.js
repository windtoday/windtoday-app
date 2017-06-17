import React from 'react'
import { connectInfiniteHits } from 'react-instantsearch/connectors'
import { Configure, InstantSearch } from 'react-instantsearch/dom'

import ProductsGrid from '../ProductsGrid'

const RenderHits = props => {
  return (
    <section className='w-100 bg-grey-50 pa4'>
      <ProductsGrid {...props} />
    </section>
  )
}

const HomeProducts = connectInfiniteHits(RenderHits)

export default ({filters, hitsPerPage}) => (
  <InstantSearch
    appId='PDZK7H6PD0'
    apiKey='911167d1e62d76e16e9cd746c0b1a684'
    indexName='windsurf'
    >
    <Configure filters={filters} hitsPerPage={hitsPerPage} />
    <HomeProducts hitsPerPage={hitsPerPage} />
  </InstantSearch>
)
