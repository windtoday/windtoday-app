import React from 'react'

import RefinementList from '../../RefinementList'
import Range from '../../Range'
import '../style'

function createAddLabel (label) {
  function addLabel (items) {
    return items.map(function (item) {
      item.label = `${item.label}${label}`
      return item
    })
  }
  return addLabel
}

function Facets () {
  return (
    <section data-app='facets-right' className='Facets'>

      <RefinementList
        attributeName='brand'
        limitMin={5}
        showMore
      />

      <RefinementList
        attributeName='model'
        limitMin={5}
        showMore
      />

      <RefinementList
        attributeName='year'
        limitMin={5}
        showMore
      />

      <Range
        attributeName='sail size'
        label=' m²'
      />

      <Range
        attributeName='board size'
        label=' L'
      />

      <RefinementList
        attributeName='mast type'
        limitMin={5}
        showMore
      />

      <RefinementList
        attributeName='mast carbon'
        limitMin={5}
        transformItems={createAddLabel('%')}
        showMore
      />

      <RefinementList
        attributeName='mast size'
        limitMin={5}
        transformItems={createAddLabel(' cm')}
        showMore
      />

      <RefinementList
        attributeName='fin size'
        limitMin={5}
        transformItems={createAddLabel(' cm')}
        showMore
      />

      <RefinementList
        attributeName='fin type'
        limitMin={5}
        showMore
      />

      <RefinementList
        attributeName='boom type'
        limitMin={5}
        showMore
      />

      <RefinementList
        attributeName='boom size'
        limitMin={5}
        showMore
      />

    </section>
  )
}

export default Facets
