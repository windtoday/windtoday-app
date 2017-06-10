import React from 'react'

import ProductImage from '../ProductImage'

export default ({product}) => (
  <div className='bg-white mw5 ba b--black-10 mv4'>
    <div className='pv2 ph3'>
      <h1 className='f6 ttu tracked'>{product.title}</h1>
    </div>
    <ProductImage product={product} className='w-100 db' />
    <div className='pa3'>
      <a href='#' className='link dim lh-title'>15 things every cat owner should know</a>
      <small className='gray db pv2'>AMP - <time>6 hours ago</time></small>
    </div>
  </div>
)
