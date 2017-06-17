import React from 'react'

import ProductDivImage from '../ProductDivImage'
import ProductPrice from '../ProductPrice'
import ProductStars from '../ProductStars'

import './style.scss'

export default ({product}) => {
  const {title, provider, link} = product

  return (
    <a
      target='blank'
      href={link}
      className='product-card pa3 no-underline white fade-in'>
      <ProductDivImage
        className='product-card__image br2 relative shadow-5'
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
        <div className='product-card__content absolute bottom-0 w-100'>
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
