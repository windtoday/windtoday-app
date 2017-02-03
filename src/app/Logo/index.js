import classnames from 'classnames'
import React from 'react'
import './style.scss'

const getStyle = (isDesktop) => isDesktop ? 'Logo--big' : 'Logo--tiny'
const getImage = (isDesktop) => isDesktop ? 'logo' : 'logo-tiny'

function Logo (props) {
  const {get, className} = props
  const isDesktop = get('isDesktop')
  const image = getImage(isDesktop)
  const style = classnames('Logo', getStyle(isDesktop), 'mh0-ns ma2', className)

  return (
    <a href='/' className={style}>
      <img alt='windtoday' src={`/assets/img/${image}.png`} />
    </a>
  )
}

export default Logo
