import Swipeable from 'react-swipeable'
import React from 'react'

import FacetsWrapper from '../Facets'
import Results from '../Results'

import './style.scss'

function AppWrapper (props) {
  return (
    <Swipeable
      onSwipedRight={props.toggle('facetsOpen')}
      onSwipedLeft={props.toggle('facetsOpen')}
      data-app='app-wrapper'>
      <FacetsWrapper {...props} />
      <Results {...props} />
    </Swipeable>
  )
}

export default AppWrapper
