import React from 'react'
import {Stats} from 'react-instantsearch'

import CurrentFilters from '../CurrentFilters'

const theme = {
  root: 'dib pt3 pt4-l'
}

function CustomStats () {
  return (
    <header data-app='stats' className='db pt4 pb2 ph3 ph5-l silver'>
      <CurrentFilters />
      <Stats theme={theme} />
    </header>
  )
}

export default CustomStats
