import React from 'react'
import {Range, RefinementList} from 'react-instantsearch'
import SidebarSection from '../SidebarSection'
import './style.scss'

const CONST = {
  RefinementList: {
    operator: 'or',
    limitMin: 10,
    translations: {
      showMore: extended => extended ? 'Show less' : 'Show more',
      count: count => count.toLocaleString()
    },
    showMore: true
  }
}

function Facets () {
  return (
    <div data-app='facets-wrapper'>
      <SidebarSection
        title='category'
        item={<RefinementList attributeName='category' {...CONST.RefinementList} />}
      />

      <SidebarSection
        title='provider'
        item={<RefinementList attributeName='provider' {...CONST.RefinementList} />}
      />

      <SidebarSection
        title='type'
        item={<RefinementList attributeName='type' {...CONST.RefinementList} />}
      />

      <SidebarSection
        title='brand'
        item={<RefinementList attributeName='brand' {...CONST.RefinementList} />}
      />

      <SidebarSection
        title='model'
        item={<RefinementList attributeName='model' {...CONST.RefinementList} />}
      />

      <SidebarSection
        title='diameter'
        item={<RefinementList attributeName='diameter' {...CONST.RefinementList} />}
      />

      <SidebarSection
        title='box'
        item={<RefinementList attributeName='box' {...CONST.RefinementList} />}
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
