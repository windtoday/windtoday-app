import React from 'react'

import Stats from '../Stats'
import Spinner from '../Spinner'
import Hit from '../Hit'

import './style.scss'

function renderHasMore (refine, searching) {
  return (
    <footer className='tc pv3'>
      <a
        onClick={refine}
        style={{fontSize: '.8rem'}}
        className='Hits__btn link ttu lh-solid ba br2 cb-ns db dib-l mb2 pv3 ph4 pointer sans-serif white normal blue hover-white'>
        Load More &nbsp;
        {searching && <Spinner color='blue' size='12px' />}
      </a>
    </footer>
  )
}

function CustomHits (props) {
  const {toggle, get, hits, refine, hasMore, searching} = props
  const _props = { toggle, get }

  return (
    <div data-app='hits' className='Hits ph3 ph4-l'>
      <Stats />
      <div className='pv3'>
        {hits.map((item, key) => <Hit item={item} key={key} {..._props} />)}
      </div>
      {hasMore && renderHasMore(refine, searching)}
    </div>
  )
}

export default CustomHits
