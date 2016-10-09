import React from 'react'
import {Stats} from 'react-instantsearch'

const theme = {
  root: 'db pt4 pb2 pl3 pl5-ns silver'
}

function CustomStats () {
  return (
    <Stats theme={theme} />
  )
}

export default CustomStats
