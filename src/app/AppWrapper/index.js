import React from 'react'

import FacetsWrapper from '../Facets'
import Results from '../Results'

import './style.scss'

function AppWrapper (props) {
  return (
    <div data-app='app-wrapper'>
      <FacetsWrapper {...props} />
      <Results {...props} />
    </div>
  )
}

export default AppWrapper
