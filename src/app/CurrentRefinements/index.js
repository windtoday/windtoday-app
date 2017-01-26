import React from 'react'
import {CurrentRefinements} from 'react-instantsearch/dom'
import IconClose from 'react-icons/lib/md/close'

import './style.scss'

const isRange = (item) => item.currentRefinement.max && item.currentRefinement.min
const isDottedLabel = item => item.label.indexOf('.') !== -1

function transformDotLabel (item) {
  const {label: itemLabel} = item
  const label = itemLabel.replace('.', ' ')
  return Object.assign(item, {label})
}

function transformRange (item) {
  return {
    currentRefinement: item.currentRefinement,
    label: `${item.attributeName}: `,
    items: [{'label': item.label, value: item.value}]
  }
}

function transformItems (items) {
  return items.map(function (item) {
    if (isRange(item)) item = transformRange(item)
    if (isDottedLabel(item)) item = transformDotLabel(item)
    return item
  })
}

function CustomCurrentRefinements () {
  return (
    <div data-app='current-filters' >
      <CurrentRefinements
        transformItems={transformItems}
        translations={{
          clearFilter: <IconClose style={{verticalAlign: 'baseline'}} />
        }}
      />
    </div>
  )
}

export default CustomCurrentRefinements
