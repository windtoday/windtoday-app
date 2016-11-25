import React from 'react'
import {Stats} from 'react-instantsearch/dom'

import CurrentRefinements from '../CurrentRefinements'

const theme = {
  root: 'db mt3 pv3'
}

function CustomStats () {
  return (
    <header data-app='stats' className='fade-in db pt2 light-gray'>
      <CurrentRefinements />
      <Stats theme={theme} />
    </header>
  )
}

export default CustomStats
