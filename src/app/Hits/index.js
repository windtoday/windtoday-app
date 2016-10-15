import React from 'react'
import {Hits} from 'react-instantsearch'

import Pagination from '../Pagination'
import Stats from '../Stats'
import Hit from '../Hit'

function CustomHits ({hits}) {
  return (
    <div data-app='hits'>
      <Stats />
      <div className='pv3 pv4-l ph3 ph5-l'>
        {hits.map((hit, idx) => <Hit item={hit} key={idx} />)}
        <Pagination />
      </div>
    </div>
  )
}

export default Hits.connect(CustomHits)
