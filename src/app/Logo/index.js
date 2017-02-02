import classnames from 'classnames'
import React from 'react'
import './style.scss'

import {connectSearchBox} from 'react-instantsearch/connectors'

const getStyle = (isDesktop) => isDesktop ? 'Logo__desktop' : 'Logo__mobile'
const getImage = (isDesktop) => isDesktop ? 'logo' : 'logo-tiny'

function Logo (props) {
  const {get, className, refine} = props
  const isDesktop = get('isDesktop')
  const image = getImage(isDesktop)
  const deviceStyle = getStyle(isDesktop)
  const theme = 'button-reset mh0-ns ma2 pointer'
  const style = classnames('Logo', deviceStyle, theme, className)

  function onClear () {
    refine('')
  }

  return (
    <a
      className={style}
      onClick={onClear}
    >
      <img className='Logo-img' alt='windtoday' src={`/assets/img/${image}.png`} />
    </a>
  )
}

export default connectSearchBox(Logo)
