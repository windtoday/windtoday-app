import React from 'react'
import {Stats} from 'react-instantsearch'

import CurrentFilters from '../CurrentFilters'

const theme = {
  root: 'dib pt3 mt2-l'
}

function CustomStats () {
  return (
    <header data-app='stats' className='fade-in db pt2 pb2 ph3 ph5-l light-silver'>
      <CurrentFilters />
      <Stats theme={theme} />
    </header>
  )
}

export default CustomStats
