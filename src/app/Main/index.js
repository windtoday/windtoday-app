import Swipeable from 'react-swipeable'
import React from 'react'

import AsideLeft from '../AsideLeft'
import Results from '../Results'
import Facets from '../Facets'

function Main (props) {
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
      data-app='app-main'>

      <AsideLeft {...props}>
        <Facets {...props} />
      </AsideLeft>

      <Results {...props} />
    </Swipeable>
  )
}

export default Main
