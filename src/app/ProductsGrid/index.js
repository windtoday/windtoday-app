import InfiniteScroll from 'react-infinite-scroll-component'
import React from 'react'

import contentPlaceholder from '../util/content-placeholder'
import ProductCard from '../ProductCard'
import SearchStats from '../SearchStats'

const getProducts = ({products, hits, get}) => (
  products || contentPlaceholder(hits, get('hitsPerPage'))
)

export default ({refine, hasMore, stats = false, ...props}) => {
  const products = getProducts(props)

  return (
    <InfiniteScroll
      next={refine}
      hasMore={hasMore}
      scrollThreshold={0.6}
      >
      {stats && <SearchStats {...props} />}
      <div
        className='flex justify-center flex-wrap overflow-hidden'>
        {products.map((product, index) => <ProductCard key={index} product={product} />)}
      </div>
    </InfiniteScroll>
  )
}
