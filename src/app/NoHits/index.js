import React from 'react'

import IconWind from '../Icon/wind'
import './style.scss'

function NoHits (props) {
  const {query} = props

  return (
    <article data-app='no-hits' className='no-hits tc pa4-l pa4'>
      <IconWind className='w4 pv4' />
      <h1 className='no-break blue pt2'>{query}</h1>
      <h2 className='mid-gray'>has not been seen in the last days.</h2>
    </article>
  )
}

export default NoHits
