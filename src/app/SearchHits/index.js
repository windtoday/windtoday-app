import InfiniteScroll from 'react-infinite-scroll-component'
import React, {createElement} from 'react'
import classnames from 'classnames'

import SearchStats from '../SearchStats'
import ProductCard from '../ProductCard'
import SearchHit from '../SearchHit'

export default (props) => {
  const {get, hits, refine, hasMore} = props
  const isGrid = get('hitComponent') === 'grid'
  const childComponent = isGrid ? ProductCard : SearchHit

  return (
    <InfiniteScroll
      next={refine}
      hasMore={hasMore}
      scrollThreshold={0.6}
        >
      <div data-app='search-hits'>
        <SearchStats {...props} />
        <div className={classnames('overflow-hidden', {
          'flex justify-center flex-wrap': isGrid
        })}>
          {hits.map((product, key) => (
            createElement(childComponent, {product, key, ...props})
          ))}
        </div>
      </div>
    </InfiniteScroll>
  )
}
