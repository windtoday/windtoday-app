import React from 'react'
import classnames from 'classnames'

import Facets from '../Facets'
import './style.scss'

const theme = 'FacetsWrapper fl w-100 w-25-l vh-100 bg-white overflow-x-hidden overflow-y-scroll z-1'

function FacetsWrapper (props) {
  const { get } = props

  const style = classnames(theme, {
    'FacetsWrapper__collapse': !get('facetsOpen')
  })

  return (
    <aside data-app='facets-wrapper' className={style} >
      <Facets {...props} />
    </aside>
  )
}

export default FacetsWrapper
