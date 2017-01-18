import React from 'react'
import './style.scss'

function Logo ({toggle, get}) {
  let image
  let style

  if (get('isDesktop')) {
    image = 'logo'
    style = 'Logo'
  } else {
    image = 'logo-tiny'
    style = 'Logo--tiny'
  }

  return (
    <a href='/' className={style}>
      <img alt='windtoday' src={`/assets/img/${image}.png`} />
    </a>
  )
}

export default Logo
