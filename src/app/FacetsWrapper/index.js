import React from 'react'
import {Range, RefinementList} from 'react-instantsearch'
import './style.scss'

function SidebarSection ({title, item}) {
  return (
    <article className='pa3 pa4-ns'>
      <div className='f6 fw6 ttu tracked pb2 bb b--black-10 black-70'>{title}</div>
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
          />
        }
      />

    <SidebarSection
      title='provider'
      item={
          <RefinementList
            attributeName='provider'
            id='p'
            operator='or'
            limitMin={10}
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
          />
        }
      />

    <SidebarSection
      title='size'
      item={
          <Range
            attributeName='size'
            id='s'
            theme={Object.assign({}, Range.defaultTheme, {
              boundMin: 'ais-Range__bound ais-Range__boundMin Range__size',
              boundMax: 'ais-Range__bound ais-Range__boundMax Range__size'
            })}
          />
        }
      />

    <SidebarSection
      title='litres'
      item={
          <Range
            attributeName='litres'
            id='l'
            theme={Object.assign({}, Range.defaultTheme, {
              boundMin: 'ais-Range__bound ais-Range__boundMin Range__litres',
              boundMax: 'ais-Range__bound ais-Range__boundMax Range__litres'
            })}
          />
        }
      />

    <SidebarSection
      title='price'
      item={
          <Range
            attributeName='price'
            id='e'
            theme={Object.assign({}, Range.defaultTheme, {
              boundMin: 'ais-Range__bound ais-Range__boundMin Range__price',
              boundMax: 'ais-Range__bound ais-Range__boundMax Range__price'
            })}
          />
        }
      />
    </div>
  )
}

export default Facets
