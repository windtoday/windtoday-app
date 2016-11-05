import React from 'react'
import Range from '../Range'
import RefinementList from '../RefinementList'
import SidebarSection from '../SidebarSection'
import './style.scss'

function Facets () {
  return (
    <div data-app='facets-wrapper'>
      <RefinementList title='category' attributeName='category' />
      <RefinementList title='provider' attributeName='provider' />
      <RefinementList title='seller' attributeName='seller' />
      <RefinementList title='brand' attributeName='brand' />
      <RefinementList title='model' attributeName='model' />
      <RefinementList title='mast type' attributeName='mast.diameter' />
      <RefinementList title='fin box' attributeName='fin.box' />

      <SidebarSection title='mastcarbon' item={<Range attributeName='mast.carbon' />} />
      <SidebarSection title='price' item={<Range attributeName='price' />} />
      <SidebarSection title='sail size' item={<Range attributeName='sail.size' />} />
      <SidebarSection title='board size' item={<Range attributeName='board.size' />} />
      <RefinementList title='mast size' attributeName='mast.size' />
      <RefinementList title='fin size' attributeName='fin.size' />
      <RefinementList title='fin type' attributeName='fin.type' />
      <RefinementList title='boom size' attributeName='boom.size' />
      <RefinementList title='boom type' attributeName='boom.type' />
    </div>
  )
}

export default Facets
