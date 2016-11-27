import React from 'react'
import RefinementList from '../RefinementList'
import Range from '../Range'
import './style.scss'

function Facets () {
  return (
    <div data-app='facets-wrapper'>

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

      <RefinementList
        attributeName='brand'
        title='brand'
        limitMin={5}
        showMore
      />

      <RefinementList
        attributeName='model'
        title='model'
        limitMin={5}
        showMore
      />

      <Range
        attributeName='sail.size'
        title='sail size'
        label='m'
      />

      <Range
        attributeName='board.size'
        title='board size'
        label='l'
      />

      <RefinementList
        attributeName='mast.type'
        title='mast type'
        limitMin={5}
        showMore
      />

      <RefinementList
        attributeName='mast.carbon'
        title='mast carbon'
        limitMin={5}
        showMore
      />

      <RefinementList
        attributeName='mast.size'
        title='mast size'
        limitMin={5}
        showMore
      />

      <RefinementList
        attributeName='fin.size'
        title='fin size'
        limitMin={5}
        showMore
      />

      <RefinementList
        attributeName='fin.type'
        title='fin type'
        limitMin={5}
        showMore
      />

      <RefinementList
        attributeName='boom.type'
        title='boom type'
        limitMin={5}
        showMore
      />

      <RefinementList
        attributeName='boom.size'
        title='boom size'
        limitMin={5}
        showMore
      />

    </div>
  )
}

export default Facets
