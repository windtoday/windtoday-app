import React from 'react'

import RefinementList from '../../RefinementList'
import Range from '../../Range'
import '../style'

function Facets () {
  return (
    <section data-app='facets-left' className='Facets'>
      <Range
        attributeName='price'
        title='price'
        label='€'
      />

      <RefinementList
        attributeName='category'
        title='category'
      />

      <RefinementList
        attributeName='provider'
        title='provider'
      />

      <RefinementList
        attributeName='seller'
        title='seller'
      />
    </section>
  )
}

export default Facets
