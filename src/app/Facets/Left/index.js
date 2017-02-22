import React from 'react'

import RefinementList from '../../RefinementList'
import Range from '../../Range'
import '../style'

function Facets () {
  return (
    <section data-app='facets-left' className='facets facets-left'>
      <Range
        attributeName='price'
        label='€'
      />

      <RefinementList
        attributeName='condition'
      />

      <RefinementList
        attributeName='category'
      />

      <RefinementList
        attributeName='provider'
      />

    </section>
  )
}

export default Facets
