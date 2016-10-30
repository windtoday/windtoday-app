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
            id='c'
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
            id='pr'
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
            id='t'
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
            id='br'
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
            id='m'
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
            id='d'
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
            id='b'
            operator='or'
            limitMin={10}
            translations={translatable}
            showMore
          />
        }
      />

      <SidebarSection
        title='carbon'
        item={<Range attributeName='carbon' id='cc' />}
      />

      <SidebarSection
        title='price'
        item={<Range attributeName='price' id='e' />}
      />

      <SidebarSection
        title='sail size'
        item={<Range attributeName='sail.size' id='ss' />}
      />

      <SidebarSection
        title='board size'
        item={<Range attributeName='board.size' id='bs' />}
      />

      <SidebarSection
        title='mast size'
        item={<Range attributeName='mast.size' id='ms' />}
      />

      <SidebarSection
        title='fin size'
        item={<Range attributeName='fin.size' id='fs' />}
      />

    </div>
  )
}

export default Facets
