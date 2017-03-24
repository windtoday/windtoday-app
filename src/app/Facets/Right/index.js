import React from 'react'

import RefinementList from '../../RefinementList'
import RefinementListInline from '../../RefinementListInline'
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
    <section data-app='facets-right' className='facets facets-right pa2'>

      <RefinementListInline
        attributeName='brand'
        limitMin={10}
        showMore
        withSearchBox
      />

      <RefinementListInline
        attributeName='model'
        limitMin={10}
        showMore
        withSearchBox
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

      <RefinementListInline
        attributeName='mast carbon'
        limitMin={3}
        transformItems={createAddLabel('%')}
        showMore
      />

      <RefinementListInline
        attributeName='mast size'
        limitMin={3}
        transformItems={createAddLabel(' cm')}
        showMore
      />

      <RefinementListInline
        attributeName='fin size'
        limitMin={3}
        transformItems={createAddLabel(' cm')}
        showMore
      />

      <RefinementList
        attributeName='fin type'
        limitMin={10}
      />

      <RefinementList
        attributeName='boom type'
        limitMin={5}
        showMore
      />

      <RefinementListInline
        attributeName='boom size'
        limitMin={3}
        showMore
      />

    </section>
  )
}

export default Facets
