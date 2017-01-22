import classnames from 'classnames'
import React from 'react'
import './style.scss'

const getStyle = (isDesktop) => isDesktop ? 'Logo' : 'Logo--tiny'
const getImage = (isDesktop) => isDesktop ? 'logo' : 'logo-tiny'

function Logo (props) {
  const {get, className} = props
  const isDesktop = get('isDesktop')
  const image = getImage(isDesktop)
  const style = classnames(getStyle(isDesktop), 'mh0-ns mh2', className)

  return (
    <a href='/' className={style}>
      <img className='Logo-img' alt='windtoday' src={`/assets/img/${image}.png`} />
    </a>
  )
}

export default Logo
