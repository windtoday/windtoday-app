import IconAdd from 'react-icons/lib/md/add-circle'
import createClass from 'create-react-class'
import React, {createElement} from 'react'
import classnames from 'classnames'

import SearchStats from '../SearchStats'
import ProductCard from '../ProductCard'
import SearchHit from '../SearchHit'

import './style.scss'

export default createClass({
  renderHasMore (refine, searching) {
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
  },

  render () {
    const {props, renderHasMore} = this
    const {toggle, get, hits, refine, hasMore, searching} = props
    const hitsProps = {toggle, get}

    const isGrid = get('hitComponent') === 'grid'
    const childComponent = isGrid ? ProductCard : SearchHit

    return (
      <div data-app='search-hits'>
        <SearchStats {...props} />
        <div className={classnames({
          'flex justify-center flex-wrap': isGrid
        })}>
          {hits.map((product, key) => (
            createElement(childComponent, {product, key, ...hitsProps})
          )
        )}
        </div>
        {hasMore && renderHasMore(refine, searching)}
      </div>
    )
  }
})
