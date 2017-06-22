import {Highlight} from 'react-instantsearch/dom'

import React from 'react'

export default ({product, className}) => (
  <Highlight
    className={className}
    attributeName='provider'
    hit={product}
    tagName='em'
    />
)
