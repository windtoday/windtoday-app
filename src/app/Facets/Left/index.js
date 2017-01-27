import React from 'react'

import RefinementList from '../../RefinementList'
import Range from '../../Range'
import '../style'

function Facets () {
  return (
    <section data-app='facets-left' className='Facets'>
      <Range
        attributeName='price'
        label='€'
      />

      <RefinementList
        attributeName='category'
      />

      <RefinementList
        attributeName='provider'
      />

      <RefinementList
        attributeName='condition'
      />
    </section>
  )
}

export default Facets
