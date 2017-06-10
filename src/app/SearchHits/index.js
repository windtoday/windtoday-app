import IconAdd from 'react-icons/lib/md/add-circle'
import React from 'react'

import SearchStats from '../SearchStats'
import SearchHit from '../SearchHit'

import './style.scss'

function renderHasMore (refine, searching) {
  return (
    <footer className='tc pt4'>
      <a
        onClick={refine}
        className='link ttu lh-solid cb-ns db dib-l mb2 ph4 pointer normal blue-grey-300 hover-blue-400'>
        <IconAdd size={34} className='db tc w-100 pb2' />
        <span className='f6'>Load More</span>
      </a>
    </footer>
  )
}

function SearchHits (props) {
  const {toggle, get, hits, refine, hasMore, searching} = props
  const hitsProps = {toggle, get}

  return (
    <div data-app='search-hits'>
      <SearchStats />
      <div>
        {hits.map((item, index) => (
          <SearchHit item={item} key={index} {...hitsProps} />)
        )}
      </div>
      {hasMore && renderHasMore(refine, searching)}
    </div>
  )
}

export default SearchHits
