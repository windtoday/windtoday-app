import React from 'react'

import SearchListInline from '../../SearchListInline'
import SearchRange from '../../SearchRange'
import SearchList from '../../SearchList'

export default () => (
  <section data-app='search-facets-left' className='pa2 bg-grey-50'>
    <SearchRange
      attributeName='price'
      label='€'
      />

    <SearchList
      attributeName='condition'
      />

    <SearchListInline
      attributeName='year'
      limitMin={3}
      showMore
      />

    <SearchList
      attributeName='category'
      />

  </section>
)
