import React from 'react'
import {Range, RefinementList} from 'react-instantsearch'
import './style.scss'

function SideBararticle ({title, item}) {
  return (
    <article className='pa3 pa4-ns'>
      <div className='f6 fw6 ttu tracked pb2 bb b--black-10 black-70'>{title}</div>
      {item}
    </article>
  )
}

function Facets ({children}) {
  return (
    <aside data-app='facets' className='fl w-100 w-25-l' >
      <div>
        <SideBararticle
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

        <SideBararticle
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

        <SideBararticle
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

        <SideBararticle
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

        <SideBararticle
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

        <SideBararticle
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

        <SideBararticle
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

        <SideBararticle
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
    </aside>
  )
}

export default Facets
