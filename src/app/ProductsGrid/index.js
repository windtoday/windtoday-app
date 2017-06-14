import React from 'react'

import './style.scss'
import ProductStars from '../ProductStars'
import ProductPrice from '../ProductPrice'
import ProductDivImage from '../ProductDivImage'
import InfiniteScroll from 'react-infinite-scroll-component'

const Product = (product) => {
  const {title, provider, link} = product

  return (
    <a
      target='blank'
      href={link}
      className='product-grid pa3 no-underline white'>
      <ProductDivImage
        className='product-grid__image br2 relative shadow-5'
        product={product}>
        <header className='pa3 cf white'>
          <ProductPrice
            className='fl f5 pv1 ph2 bg-grey-50 grey-700 br4'
            product={product}
             />
          <ProductStars
            className='fr f5 pv1 ph2 bg-grey-50 br4 grey-700'
            product={product} tiny />
        </header>
        <div className='product-grid__content absolute bottom-0 w-100'>
          <div className='relative pa3'>
            <span className='f5 white'>{provider}</span>
            <h1 className='f3 fw3 avenir mt2 lh-copy'>
              {title}
            </h1>
          </div>
        </div>
      </ProductDivImage>
    </a>
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
