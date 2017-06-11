import React from 'react'

import './style.scss'

import ProductImage from '../ProductImage'

const Product = (product) => {
  const {title, provider, link, price} = product

  return (
    <li className='mdc-grid-tile'>
      <div className='mdc-grid-tile__primary'>
        <a href={link} target='_blank'>
          <ProductImage
            className='mdc-grid-tile__primary-content'
            product={product} />
        </a>
      </div>
      <span className='mdc-grid-tile__secondary'>
        <i className='mdc-grid-tile__icon material-icons'>star_border</i>
        <span className='mdc-grid-tile__title'>{title}</span>
        <span className='mdc-grid-tile__support-text'>{price}€ by {provider}</span>
      </span>
    </li>
  )
}

export default ({products}) => {
  return (
    <div className='mdc-grid-list mdc-grid-list--twoline-caption mdc-grid-list--tile-gutter-1'>
      <ul className='mdc-grid-list__tiles justify-center'>
        {products.map((props, index) => <Product key={index} {...props} />)}
      </ul>
    </div>
  )
}
