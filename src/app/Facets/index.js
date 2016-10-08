import React from 'react'
import { CurrentFilters, RefinementList } from 'react-instantsearch'
import './style.scss'

const SideBarSection = ({title, items}) =>
  <section className='pa2 pa3-ns'>
    <div className='f6 fw6 ttu tracked pb2 bb b--black-10 black-70'>{title}</div>
    {items.map(i => i)}
  </section>

function Facets ({children}) {
  return (
    <aside className='fl w-100 w-25-l' >
      <div>
        <CurrentFilters
          theme={{
            root: 'CurrentFilters',
            // filters: {
            //   display: 'none'
            // },
            clearAll: 'CurrentFilters__clearAll btn'
          }}
          translations={{
            clearAll: 'Clear all filters'
          }}
        />

        <SideBarSection
          title='category'
          items={[
            <RefinementList
              attributeName='category'
              operator='or'
              limitMin={10}
            />
          ]}
        />

        <SideBarSection
          title='provider'
          items={[
            <RefinementList
              attributeName='provider'
              operator='or'
              limitMin={10}
            />
          ]}
        />

        <SideBarSection
          title='type'
          items={[
            <RefinementList
              attributeName='type'
              operator='or'
              limitMin={10}
            />
          ]}
        />

        <SideBarSection
          title='brand'
          items={[
            <RefinementList
              attributeName='brand'
              operator='or'
              limitMin={10}
            />
          ]}
        />

        <SideBarSection
          title='model'
          items={[
            <RefinementList
              attributeName='model'
              operator='or'
              limitMin={10}
            />
          ]}
        />

        <SideBarSection
          title='size'
          items={[
            <RefinementList
              attributeName='size'
              operator='or'
              limitMin={10}
            />
          ]}
        />

        <SideBarSection
          title='litres'
          items={[
            <RefinementList
              attributeName='litres'
              operator='or'
              limitMin={10}
            />
          ]}
        />
      </div>
    </aside>
  )
}

export default Facets
