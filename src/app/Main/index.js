import Swipeable from 'react-swipeable'
import React from 'react'

import AsideRight from '../Aside/Right'
import AsideLeft from '../Aside/Left'
import Results from '../Results'

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
      role='main'
      data-app='app-main'>

      <AsideLeft {...props} />
      <Results {...props} />
      <AsideRight {...props} />
    </Swipeable>
  )
}

export default Main
