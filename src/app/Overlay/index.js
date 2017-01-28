import React from 'react'
import classnames from 'classnames'

import './style.scss'

function Overlay (props) {
  const {children, active} = props

  const style = classnames('Overlay vh-100 w-100 fixed bg-black', {
    'Overlay__active o-60 z-3': active,
    'o-0': !active
  })

  return (
    <article data-app='overlay' className={style}>{children}</article>
  )
}

export default Overlay
