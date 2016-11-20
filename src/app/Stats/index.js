import React from 'react'
import {Stats} from 'react-instantsearch/dom'

import CurrentRefinements from '../CurrentRefinements'

const theme = {
  root: 'dib pt3 mt2-l'
}

function CustomStats () {
  return (
    <header data-app='stats' className='fade-in db pt2 light-silver'>
      <CurrentRefinements />
      <Stats theme={theme} />
    </header>
  )
}

export default CustomStats
