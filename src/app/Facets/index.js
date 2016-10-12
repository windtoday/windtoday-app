import React from 'react'
import {Range, RefinementList} from 'react-instantsearch'
import './style.scss'

function SideBarSection ({title, item}) {
  return (
    <section className='pa3 pa4-ns'>
      <div className='f6 fw6 ttu tracked pb2 bb b--black-10 black-70'>{title}</div>
      {item}
    </section>
  )
}

function Facets ({children}) {
  return (
    <aside className='fl w-100 w-25-l mt5' >
      <div>
        <SideBarSection
          title='category'
          item={
            <RefinementList
              attributeName='category'
              key='category'
              operator='or'
              limitMin={10}
            />
          }
        />

        <SideBarSection
          title='provider'
          item={
            <RefinementList
              attributeName='provider'
              key='provider'
              operator='or'
              limitMin={10}
            />
          }
        />

        <SideBarSection
          title='type'
          item={
            <RefinementList
              attributeName='type'
              key='type'
              operator='or'
              limitMin={10}
            />
          }
        />

        <SideBarSection
          title='brand'
          item={
            <RefinementList
              attributeName='brand'
              key='brand'
              operator='or'
              limitMin={10}
            />
          }
        />

        <SideBarSection
          title='model'
          item={
            <RefinementList
              attributeName='model'
              key='model'
              operator='or'
              limitMin={10}
            />
          }
        />

        <SideBarSection
          title='size'
          item={
            <Range
              attributeName='size'
              key='size'
              theme={Object.assign({}, Range.defaultTheme, {
                boundMin: 'ais-Range__bound ais-Range__boundMin Range__size',
                boundMax: 'ais-Range__bound ais-Range__boundMax Range__size'
              })}
            />
          }
        />

        <SideBarSection
          title='litres'
          item={
            <Range
              attributeName='litres'
              key='litres'
              theme={Object.assign({}, Range.defaultTheme, {
                boundMin: 'ais-Range__bound ais-Range__boundMin Range__litres',
                boundMax: 'ais-Range__bound ais-Range__boundMax Range__litres'
              })}
            />
          }
        />

        <SideBarSection
          title='price'
          item={
            <Range
              attributeName='price'
              key='price'
              theme={Object.assign({}, Range.defaultTheme, {
                boundMin: 'ais-Range__bound ais-Range__boundMin Range__price',
                boundMax: 'ais-Range__bound ais-Range__boundMax Range__price'
              })}
            />
          }
        />
      </div>
    </aside>
  )
}

export default Facets
