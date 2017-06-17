import {Highlight} from 'react-instantsearch/dom'
import Ellipsis from 'react-clamp'

import React from 'react'

export default ({product}) => (
  <Ellipsis clamp={2}>
    <Highlight
      attributeName='title'
      hit={product}
      tagName='em' />
  </Ellipsis>
)
