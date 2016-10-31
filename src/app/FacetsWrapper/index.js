import React from 'react'
import {Range} from 'react-instantsearch'
import RefinementList from '../RefinementList'
import SidebarSection from '../SidebarSection'
import './style.scss'

function Facets () {
  return (
    <div data-app='facets-wrapper'>
      <SidebarSection
        title='category'
        item={<RefinementList attributeName='category' />}
      />

      <SidebarSection
        title='provider'
        item={<RefinementList attributeName='provider' />}
      />

      <SidebarSection
        title='type'
        item={<RefinementList attributeName='type' />}
      />

      <SidebarSection
        title='brand'
        item={<RefinementList attributeName='brand' />}
      />

      <SidebarSection
        title='model'
        item={<RefinementList attributeName='model' />}
      />

      <SidebarSection
        title='diameter'
        item={<RefinementList attributeName='diameter' />}
      />

      <SidebarSection
        title='box'
        item={<RefinementList attributeName='box' />}
      />

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
