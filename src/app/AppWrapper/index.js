import Swipeable from 'react-swipeable'
import React from 'react'

import FacetsWrapper from '../FacetsWrapper'
import Results from '../Results'

function AppWrapper (props) {
  const { toggle, get } = props

  function onSwipedRight () {
    get('facetsOpen') || toggle('facetsOpen')()
  }

  function onSwipedLeft () {
    get('facetsOpen') && toggle('facetsOpen')()
  }

  return (
    <Swipeable
      stopPropagation
      onSwipedRight={onSwipedRight}
      onSwipedLeft={onSwipedLeft}
      data-app='app-wrapper'>
      <FacetsWrapper {...props} />
      <Results {...props} />
    </Swipeable>
  )
}

export default AppWrapper
