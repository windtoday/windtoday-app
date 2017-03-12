import React from 'react'

import Stats from '../Stats'
import Spinner from '../Spinner'
import Hit from '../Hit'

import './style.scss'

function renderHasMore (refine, searching) {
  return (
    <footer className='tc pv3 ph3 ph4-l'>
      <a
        onClick={refine}
        style={{fontSize: '.8rem'}}
        className='dim link ttu lh-solid ba br2 cb-ns db dib-l mb2 pv3 ph4 pointer sans-serif normal bg-gradient white b--transparent card-shadow'>
        Load More {searching && <Spinner className='ml1' size='12px' />}
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
      <div className='pa2'>
        {hits.map((item, key) => <Hit item={item} key={key} {...hitsProps} />)}
      </div>
      {hasMore && renderHasMore(refine, searching)}
    </div>
  )
}

export default CustomHits
