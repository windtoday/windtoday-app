import React from 'react'

import ProductProvider from '../ProductProvider'
import ProductImage from '../ProductImage'
import ProductTitle from '../ProductTitle'
import ProductPrice from '../ProductPrice'
import ProductStars from '../ProductStars'

import './style.scss'

export default ({product}) => {
  const {link} = product
  const isReady = product.title !== undefined

  return (
    <a
      target='_blank'
      href={link}
      className='product-card pa3 no-underline white fade-in'>
      <ProductImage
        className='product-card__image br2 relative'
        product={product}>
        <header className='pa3 cf white'>
          {isReady && <ProductPrice
            className='flex items-center fl f5 pv1 ph2 bg-grey-50 grey-700 br4'
            product={product}
             />
          }
          {isReady && <ProductStars
            className='fr f5 pv1 ph2 bg-grey-50 br4 grey-700'
            product={product} tiny />
          }
        </header>
        <div className='product-card__content absolute bottom-0 w-100'>
          <div className='relative pa3'>
            {isReady &&
              <span className='f5 white-70'>
                <ProductProvider className='fw3' product={product} />
                <span className='ph1'>·</span>
                <span>{product.category}</span>
              </span>
            }
            <h1 className='f3 fw5 mt2 lh-copy'>
              <ProductTitle product={product} />
            </h1>
          </div>
        </div>
      </ProductImage>
    </a>
  )
}
