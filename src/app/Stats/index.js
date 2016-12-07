import React from 'react'
import {Stats} from 'react-instantsearch/dom'

import CurrentRefinements from '../CurrentRefinements'
import './style.scss'

function CustomStats () {
  return (
    <header data-app='stats' className='fade-in db pt2 light-gray'>
      <CurrentRefinements />
      <Stats />
    </header>
  )
}

export default CustomStats
