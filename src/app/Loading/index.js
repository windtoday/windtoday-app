import React from 'react'
import classnames from 'classnames'

import './style.scss'

function Loading (props) {
  return (
    <article className='z-3 fixed vh-100 dt w-100 bg-blue'>
      <div className='dtc v-mid tc'>
        <div className='Loading' />
      </div>
    </article>
  )
}

export default Loading
