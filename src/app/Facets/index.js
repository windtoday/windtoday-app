import React from 'react'
import classnames from 'classnames'
import FacetsWrapper from '../FacetsWrapper'
import './style.scss'

const theme = 'Facets fl w-100 w-25-l vh-100 bg-white overflow-x-hidden overflow-y-scroll z-1'

function Facets (props) {
  const { get } = props

  const style = classnames(theme, {
    'Facets__collapse': !get('facetsOpen')
  })

  return (
    <aside data-app='facets' className={style} >
      <FacetsWrapper {...props} />
    </aside>
  )
}

export default Facets
