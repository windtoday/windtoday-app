import {Highlight} from 'react-instantsearch/dom'
import Ellipsis from 'react-clamp'

import React from 'react'

export default ({className, product}) => (
  <Ellipsis
    clamp={2}
    className={className}>
    <Highlight
      attributeName='title'
      hit={product}
      tagName='em' />
  </Ellipsis>
)
