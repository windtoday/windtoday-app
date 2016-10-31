import React from 'react'
import { RefinementList } from 'react-instantsearch'

const commonProps = {
  operator: 'or',
  limitMin: 10,
  translations: {
    showMore: extended => extended ? 'Show less' : 'Show more',
    count: count => count.toLocaleString()
  },
  showMore: true
}

function CustomRefinementList (props) {
  return (
    <RefinementList {...commonProps} {...props} />
  )
}

export default CustomRefinementList
