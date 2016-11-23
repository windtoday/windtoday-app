import React from 'react'
import classnames from 'classnames'
import FacetsWrapper from '../FacetsWrapper'
import './style.scss'

const theme = 'fl w-100 w-25-l vh-100 overflow-x-hidden overflow-y-scroll z-1'

function Facets (props) {
  const { toggle, get } = props

  const style = classnames(theme, {
    'facets-collapse': !get('facetsOpen')
  })

  return (
    <aside data-app='facets' className={style} >
      <FacetsWrapper {...props} />
    </aside>
  )
}

export default Facets
