import Swipeable from 'react-swipeable'
import React from 'react'

import AsideLeft from '../AsideLeft'
import AsideRight from '../AsideRight'
import Results from '../Results'
import Facets from '../Facets'

function Main (props) {
  const { toggle, get } = props
  const width = window.innerWidth

  let start
  let finish

  function onSwiping (evt, deltaX, deltaY, absX, absY, velocity) {
    if (!start) start = deltaX
  }

  function onSwiped (evt, deltaX, deltaY, isFlick, velocity) {
    console.log('start:', start)
    console.log('finish:', deltaX)
    start = null
  }

  function isOpenAsideLeft (startX) {
    return startX < (width / 2) * (1 / 3)
  }

  return (
    <Swipeable
      data-app='app-main'
      onSwiping={onSwiping}
      onSwiped={onSwiped}
      delta={1}
      stopPropagation
      >

      <AsideLeft {...props}>
        <Facets {...props} />
      </AsideLeft>

      <Results {...props} />

      <AsideRight {...props}>
        <Facets {...props} />
      </AsideRight>

    </Swipeable>
  )
}

export default Main
