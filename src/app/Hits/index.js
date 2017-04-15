import IconAdd from 'react-icons/lib/md/add-circle'
import React from 'react'

import Stats from '../Stats'
import Hit from '../Hit'

import './style.scss'

function renderHasMore (refine, searching) {
  return (
    <footer className='tc pt4'>
      <a
        onClick={refine}
        className='dim link ttu lh-solid cb-ns db dib-l mb2 ph4 pointer normal blue-grey-200'>
        <IconAdd size={34} className='db tc w-100 pb2' />
        <span className='f6'>Load More</span>
      </a>
    </footer>
  )
}

function CustomHits (props) {
  const {toggle, get, hits, refine, hasMore, searching} = props
  const hitsProps = { toggle, get }

  return (
    <div data-app='hits' className='hits'>
      <Stats />
      <div>
        {hits.map((item, key) => <Hit item={item} key={key} {...hitsProps} />)}
      </div>
      {hasMore && renderHasMore(refine, searching)}
    </div>
  )
}

export default CustomHits
