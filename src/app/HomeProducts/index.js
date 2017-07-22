/* global ALGOLIA */

import { Configure, InstantSearch } from 'react-instantsearch/dom'
import { connectInfiniteHits } from 'react-instantsearch/connectors'
import React from 'react'

import ProductsGrid from '../ProductsGrid'

const HomeProducts = connectInfiniteHits(props => (
  <section className='w-100 bg-grey-50 ph4-l ph0 pv4-l pv3'>
    <ProductsGrid {...props} />
  </section>
))

export default ({filters, hitsPerPage, ...props}) => (
  <InstantSearch
    appId={ALGOLIA.appId}
    apiKey={ALGOLIA.apiKey}
    indexName={ALGOLIA.indexName}
    >
    <Configure filters={filters} hitsPerPage={hitsPerPage} />
    <HomeProducts hitsPerPage={hitsPerPage} {...props} />
  </InstantSearch>
)
