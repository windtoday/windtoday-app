import InfiniteScroll from 'react-infinite-scroll-component'
import React from 'react'

import ProductCard from '../ProductCard'

export default ({hits, refine, hasMore, hitsPerPage}) => {
  const products = hits.length > 0 ? hits : Array(hitsPerPage).fill({})

  return (
    <InfiniteScroll
      next={refine}
      hasMore={hasMore}
      scrollThreshold={0.6}
      >
      <div
        className='flex justify-center flex-wrap overflow-hidden'>
        {products.map((product, index) => <ProductCard key={index} product={product} />)}
      </div>
    </InfiniteScroll>
  )
}
