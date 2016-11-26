import React from 'react'
import RefinementList from '../RefinementList'

import './style.scss'

function Facets () {
  return (
    <div data-app='facets-wrapper'>

      <RefinementList
        title='price'
        attributeName='price'
        limitMin={5}
        showMore />

      <RefinementList
        title='category'
        attributeName='category' />

      <RefinementList
        title='provider'
        attributeName='provider' />

      <RefinementList
        title='seller'
        attributeName='seller' />

      <RefinementList
        title='brand'
        attributeName='brand'
        limitMin={5}
        showMore />

      <RefinementList
        title='model'
        attributeName='model'
        limitMin={5}
        showMore />

      <RefinementList
        title='sail size'
        attributeName='sail.size'
        limitMin={5}
        showMore />

      <RefinementList
        title='board size'
        attributeName='board.size'
        limitMin={5}
        showMore />

      <RefinementList
        title='mast type'
        limitMin={5}
        attributeName='mast.type'
        showMore />

      <RefinementList
        title='mast carbon'
        limitMin={5}
        attributeName='mast.carbon'
        showMore />

      <RefinementList
        title='mast size'
        attributeName='mast.size'
        limitMin={5}
        showMore />

      <RefinementList
        title='fin size'
        attributeName='fin.size'
        limitMin={5}
        showMore />

      <RefinementList
        title='fin type'
        attributeName='fin.type'
        limitMin={5}
        showMore />

      <RefinementList
        title='mast type'
        attributeName='mast.type'
        limitMin={5}
        showMore />

      <RefinementList
        title='mast carbon'
        attributeName='mast.carbon'
        limitMin={5}
        showMore />

      <RefinementList
        title='mast size'
        attributeName='mast.size'
        limitMin={5}
        showMore />

      <RefinementList
        title='boom type'
        attributeName='boom.type'
        limitMin={5}
        showMore />

      <RefinementList
        title='boom size'
        attributeName='boom.size'
        limitMin={5}
        showMore />

    </div>
  )
}

export default Facets
