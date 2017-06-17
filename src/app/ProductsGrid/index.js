import React from 'react'

import ProductCard from '../ProductCard'
import InfiniteScroll from 'react-infinite-scroll-component'

export default ({hits, refine, hasMore}) => {
  return (
    <InfiniteScroll
      next={refine}
      hasMore={false}
      scrollThreshold={0.6}
      >
      <div
        className='flex justify-center flex-wrap'>
        {hits.map((props, index) => <ProductCard key={index} {...props} />)}
      </div>
    </InfiniteScroll>
  )
}
