import React from 'react'
import RefinementList from '../RefinementList'
import Range from '../Range'

import './style.scss'

function Facets () {
  return (
    <div data-app='facets-wrapper'>

      <Range attributeName='price' />
    </div>
  )
}

export default Facets
