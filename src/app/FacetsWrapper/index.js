import React from 'react'
import {Range, RefinementList} from 'react-instantsearch'
import './style.scss'

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
            showMore
          />
        }
      />

    <SidebarSection
      title='brand'
      item={
          <RefinementList
            attributeName='brand'
            id='b'
            operator='or'
            limitMin={10}
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
            showMore
          />
        }
      />

    <SidebarSection
      title='size'
      item={
          <Range
            attributeName='size'
            id='s'
          />
        }
      />

    <SidebarSection
      title='litres'
      item={
          <Range
            attributeName='litres'
            id='l'
          />
        }
      />

    <SidebarSection
      title='price'
      item={
          <Range
            attributeName='price'
            id='e'
          />
        }
      />
    </div>
  )
}

export default Facets
