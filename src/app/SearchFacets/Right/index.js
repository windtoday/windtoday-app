import React from 'react'

import SearchListInline from '../../SearchListInline'
import SearchRange from '../../SearchRange'
import SearchList from '../../SearchList'

const createAddLabel = label => items => items.map(item => {
  item.label = `${item.label}${label}`
  return item
})

export default () => (
  <section data-app='search-facets-right' className='pa2 bg-grey-50'>

    <SearchListInline
      attributeName='brand'
      limitMin={10}
      showMore
      withSearchBox
    />

    <SearchListInline
      attributeName='model'
      limitMin={10}
      showMore
      withSearchBox
    />

    <SearchRange
      attributeName='sail size'
      label=' m²'
    />

    <SearchRange
      attributeName='board size'
      label=' L'
    />

    <SearchList
      attributeName='mast type'
      limitMin={5}
      showMore
    />

    <SearchListInline
      attributeName='mast carbon'
      limitMin={3}
      transformItems={createAddLabel('%')}
      showMore
    />

    <SearchListInline
      attributeName='mast size'
      limitMin={3}
      transformItems={createAddLabel(' cm')}
      showMore
    />

    <SearchListInline
      attributeName='fin size'
      limitMin={3}
      transformItems={createAddLabel(' cm')}
      showMore
    />

    <SearchList
      attributeName='fin type'
      limitMin={10}
    />

    <SearchList
      attributeName='boom type'
      limitMin={5}
      showMore
    />

    <SearchListInline
      attributeName='boom size'
      limitMin={3}
      showMore
    />

  </section>
)
