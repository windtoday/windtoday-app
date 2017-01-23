import Swipeable from 'react-swipeable'
import React from 'react'

import AsideLeft from '../AsideLeft'
import AsideRight from '../AsideRight'
import Results from '../Results'
import Facets from '../Facets'

function Main (props) {
  const { toggle, get } = props

  const toggleAsideLeftOpen = toggle('asideLeftOpen')
  const toggleAsideRightOpen = toggle('asideRightOpen')

  function onSwipedRight () {
    const isAsideRightOpen = get('asideRightOpen')
    const isAsideLeftOpen = get('asideLeftOpen')

    if (isAsideLeftOpen) return
    if (!isAsideRightOpen) return toggleAsideLeftOpen()
    return toggleAsideRightOpen()
  }

  function onSwipedLeft () {
    const isAsideRightOpen = get('asideRightOpen')
    const isAsideLeftOpen = get('asideLeftOpen')

    if (isAsideRightOpen) return
    if (isAsideLeftOpen) return toggleAsideLeftOpen()
    return toggleAsideRightOpen()
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

      <AsideRight {...props}>
        <Facets {...props} />
      </AsideRight>

      <Results {...props} />
    </Swipeable>
  )
}

export default Main
