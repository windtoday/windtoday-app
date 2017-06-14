import React from 'react'

import './style.scss'
import ProductDivImage from '../ProductDivImage'
import InfiniteScroll from 'react-infinite-scroll-component'

const Product = (product) => {
  const {title, provider, link, price} = product

  return (
    <li className='mdc-grid-tile'>
      <div className='mdc-grid-tile__primary'>
        <a href={link} target='_blank'>
          <ProductDivImage
            className='mdc-grid-tile__primary-content'
            product={product}
            />
        </a>
      </div>
      <span className='mdc-grid-tile__secondary'>
        <span className='mdc-grid-tile__title'>{title}</span>
        <span className='mdc-grid-tile__support-text'>{price}€ by {provider}</span>
      </span>
    </li>
  )
}

export default ({hits, refine, hasMore}) => {
  return (
    <div
      className='mdc-grid-list mdc-grid-list--twoline-caption'>
      <InfiniteScroll
        next={refine}
        hasMore={hasMore}
        scrollThreshold={0.6}
      >
        <ul className='mdc-grid-list__tiles justify-between'>
          {hits.map((props, index) => <Product key={index} {...props} />)}
        </ul>
      </InfiniteScroll>
    </div>
  )
}
