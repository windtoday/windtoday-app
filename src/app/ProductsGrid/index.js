import InfiniteScroll from 'react-infinite-scroll-component'
import React from 'react'

import ProductCard from '../ProductCard'
import SearchStats from '../SearchStats'

export default ({refine, hasMore, hits, get, stats = false, ...props}) => {
  const products = hits.length > 0 ? hits : Array(get('hitsPerPage')).fill({})

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
