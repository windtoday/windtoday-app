import React from 'react'
import {Range, RefinementList} from 'react-instantsearch'
import './style.scss'

const translatable = {
  showMore: extended => extended ? 'Show less' : 'Show more',
  count: count => count.toLocaleString()
}

function SidebarSection ({title, item}) {
  return (
    <article data-app={`facet-${title}`} className='ph3 ph4-ns pb4'>
      <div className='f6 fw6 ttu tracked pb2 light-silver'>{title}</div>
      {item}
    </article>
  )
}

function Facets () {
  return (
    <div data-app='facets-wrapper'>
      <SidebarSection
        title='category'
        item={
          <RefinementList
            attributeName='category'
            operator='or'
            limitMin={10}
            translations={translatable}
            showMore
          />
        }
      />

      <SidebarSection
        title='provider'
        item={
          <RefinementList
            attributeName='provider'
            operator='or'
            limitMin={10}
            translations={translatable}
            showMore
          />
        }
      />

      <SidebarSection
        title='type'
        item={
          <RefinementList
            attributeName='type'
            operator='or'
            limitMin={10}
            translations={translatable}
            showMore
          />
        }
      />

      <SidebarSection
        title='brand'
        item={
          <RefinementList
            attributeName='brand'
            operator='or'
            limitMin={10}
            translations={translatable}
            showMore
          />
        }
      />

      <SidebarSection
        title='model'
        item={
          <RefinementList
            attributeName='model'
            operator='or'
            limitMin={10}
            translations={translatable}
            showMore
          />
        }
      />

      <SidebarSection
        title='diameter'
        item={
          <RefinementList
            attributeName='diameter'
            operator='or'
            limitMin={10}
            translations={translatable}
            showMore
          />
        }
      />

      <SidebarSection
        title='box'
        item={
          <RefinementList
            attributeName='box'
            operator='or'
            limitMin={10}
            translations={translatable}
            showMore
          />
        }
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
