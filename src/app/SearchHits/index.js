import InfiniteScroll from 'react-infinite-scroll-component'
import React, {createElement} from 'react'

import SearchStats from '../SearchStats'
import ProductCard from '../ProductCard'

export default (props) => {
  const {hits, refine, hasMore} = props

  return (
    <InfiniteScroll
      next={refine}
      hasMore={hasMore}
      scrollThreshold={0.6}
        >
      <div data-app='search-hits'>
        <SearchStats {...props} />
        <div className='overflow-hidden flex justify-center flex-wrap'>
          {hits.map((product, key) => (
            createElement(ProductCard, {product, key, ...props})
          ))}
        </div>
      </div>
    </InfiniteScroll>
  )
}
