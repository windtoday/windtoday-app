import {Highlight} from 'react-instantsearch/dom'

import React from 'react'

export default ({product}) => (
  <Highlight
    attributeName='provider'
    hit={product}
    tagName='em'
    />
)
