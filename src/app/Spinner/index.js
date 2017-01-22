import classnames from 'classnames'
import React from 'react'

import './style.scss'

function Spinner (props) {
  props = Object.assign({size: '65px'}, props)
  const {size, className, color} = props
  const style = classnames('Spinner', className)

  return (
    <svg
      className={style}
      width={size}
      height={size}
      viewBox='0 0 66 66'
      xmlns='http://www.w3.org/2000/svg'>
      <circle
        className={`Spinner-path Spinner-path__${color}`}
        fill='none'
        strokeWidth='6'
        strokeLinecap='round'
        cx='33'
        cy='33'
        r='30'
      />
    </svg>
  )
}

export default Spinner
