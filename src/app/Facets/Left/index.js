import React from 'react'

import RefinementList from '../../RefinementList'
import RefinementListInline from '../../RefinementListInline'
import Range from '../../Range'

function Facets () {
  return (
    <section data-app='facets-left' className='facets-left pa2 bg-grey-50'>
      <Range
        attributeName='price'
        label='€'
      />

      <RefinementList
        attributeName='condition'
      />

      <RefinementListInline
        attributeName='year'
        limitMin={3}
        showMore
      />

      <RefinementList
        attributeName='category'
      />

    </section>
  )
}

export default Facets
