import React from 'react'
import {Range} from 'react-instantsearch'
import RefinementList from '../RefinementList'
import SidebarSection from '../SidebarSection'
import './style.scss'

function Facets () {
  return (
    <div data-app='facets-wrapper'>
      <RefinementList title='category' attributeName='category' />
      <RefinementList title='provider' attributeName='provider' />
      <RefinementList title='type' attributeName='type' />
      <RefinementList title='brand' attributeName='brand' />
      <RefinementList title='model' attributeName='model' />
      <RefinementList title='diameter' attributeName='diameter' />
      <RefinementList title='box' attributeName='box' />

      <SidebarSection
        title='carbon'
        item={<Range attributeName='carbon' />}
      />

      <SidebarSection
        title='price'
        item={<Range attributeName='price' />}
      />

      <SidebarSection
        title='sail size'
        item={<Range attributeName='sail.size' />}
      />

      <SidebarSection
        title='board size'
        item={<Range attributeName='board.size' />}
      />

      <SidebarSection
        title='mast size'
        item={<Range attributeName='mast.size' />}
      />

      <SidebarSection
        title='fin size'
        item={<Range attributeName='fin.size' />}
      />

    </div>
  )
}

export default Facets
