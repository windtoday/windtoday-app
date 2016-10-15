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
    <article className='fl w-100 w-25-l' >
      <div>
        <SideBarSection
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

        <SideBarSection
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

        <SideBarSection
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

        <SideBarSection
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

        <SideBarSection
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

        <SideBarSection
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

        <SideBarSection
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

        <SideBarSection
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
    </article>
  )
}

export default Facets
