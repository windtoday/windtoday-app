import React from 'react'
import { connectHits } from 'react-instantsearch/connectors'

import ProductCard from '../ProductCard'

const RenderHits = ({hits}) => {
  const products = hits.slice(0, 3)

  return (
    <article className='pv4 w-100 bg-white ph6'>
      <div className='f2 fw6 pt3 pb2 bb b--blue-500 black ttc bw2 flex justify-between items-center'>
        <h3 className='ma0 avenir'>Feature Products</h3>
        <a href='/pens/' className='link f5 blue-500 avenir'>View More Products →</a>
      </div>
      <div className='pt3 flex justify-around'>
        {products.map((product, index) => <ProductCard key={index} product={product} />)}
      </div>
    </article>
  )
}

const ConnectedRenderHits = connectHits(RenderHits)

export default () => (
  <ConnectedRenderHits />
)
