import React from 'react'
import {Stats} from 'react-instantsearch/dom'

import CurrentRefinements from '../CurrentRefinements'
import './style.scss'

function CustomStats () {
  return (
    <header data-app='stats' className='fade-in db moon-gray pa2'>
      <CurrentRefinements />
      <Stats className='red' />
    </header>
  )
}

export default CustomStats
