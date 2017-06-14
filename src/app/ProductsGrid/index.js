import React from 'react'

import './style.scss'
import ProductDivImage from '../ProductDivImage'
import InfiniteScroll from 'react-infinite-scroll-component'

const Product = (product) => {
  const {title, provider, link, price} = product

  return (
    <div className='product-grid pa3'>
      <ProductDivImage
        className='product-grid__image br2 relative'
        product={product}>
        <header className='pa3 cf white'>
          <span className='fl f5 pv1 ph2 bg-blue-700 br2'>{price}€</span>
        </header>
        <div className='product-grid__content absolute bottom-0 w-100'>
          <div className='relative pa3'>
            <span className='f5 white'>{provider}</span>
            <h1 className='f3 fw3 avenir mt2 lh-copy'>
              <a target='blank' href={link} className='no-underline white'>
                {title}
              </a>
            </h1>
          </div>
        </div>
      </ProductDivImage>
    </div>
  )
}

export default ({hits, refine, hasMore}) => {
  return (
    <InfiniteScroll
      next={refine}
      hasMore={false}
      scrollThreshold={0.6}
      >
      <div
        className='flex justify-center flex-wrap'>
        {hits.map((props, index) => <Product key={index} {...props} />)}
      </div>
    </InfiniteScroll>
  )
}
