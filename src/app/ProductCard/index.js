import React from 'react'

import ProductProvider from '../ProductProvider'
import ProductDivImage from '../ProductDivImage'
import ProductTitle from '../ProductTitle'
import ProductPrice from '../ProductPrice'
import ProductStars from '../ProductStars'

import './style.scss'

export default ({product}) => {
  const {link} = product

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
            className='flex items-center fl f5 pv1 ph2 bg-grey-50 grey-700 br4'
            product={product}
             />
          <ProductStars
            className='fr f5 pv1 ph2 bg-grey-50 br4 grey-700'
            product={product} tiny />
        </header>
        <div className='product-card__content absolute bottom-0 w-100'>
          <div className='relative pa3'>
            <span className='f5 white-70'>
              <ProductProvider product={product} />
            </span>
            <h1 className='f3 fw5 avenir mv2 lh-copy'>
              <ProductTitle product={product} />
            </h1>
            <span className='f5 white-70'>
              <span>{product.category}</span>
            </span>
          </div>
        </div>
      </ProductDivImage>
    </a>
  )
}
