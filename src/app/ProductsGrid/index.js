import React from 'react'

import './style.scss'
import ProductDivImage from '../ProductDivImage'

const Product = (product) => {
  const {title, provider, link, price} = product

  return (
    <li className='mdc-grid-tile'>
      <div className='mdc-grid-tile__primary br3'>
        <a href={link} target='_blank'>
          <ProductDivImage
            className='mdc-grid-tile__primary-content br3'
            product={product}
            />
        </a>
      </div>
      <span className='mdc-grid-tile__secondary br3'>
        <i className='mdc-grid-tile__icon material-icons'>star_border</i>
        <span className='mdc-grid-tile__title'>{title}</span>
        <span className='mdc-grid-tile__support-text'>{price}€ by {provider}</span>
      </span>
    </li>
  )
}

export default ({products}) => {
  return (
    <div className='mdc-grid-list mdc-grid-list--twoline-caption'>
      <ul className='mdc-grid-list__tiles justify-center'>
        {products.map((props, index) => <Product key={index} {...props} />)}
      </ul>
    </div>
  )
}
