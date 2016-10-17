import React from 'react'
import {Hits} from 'react-instantsearch'

import Pagination from '../Pagination'
import Stats from '../Stats'
import Hit from '../Hit'

function CustomHits ({hits, hitsPerPage, nbPages, toggle, get}) {
  return (
    <div data-app='hits'>
      <Stats />
      <div className='pv3 pv4-l ph3 ph5-l'>
        {hits.map((hit, idx) => <Hit item={hit} key={idx} />)}
        {nbPages > 1 && <Pagination /> }
      </div>
    </div>
  )
}

export default Hits.connect(CustomHits)
