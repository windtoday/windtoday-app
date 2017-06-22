import React from 'react'
import {CurrentRefinements} from 'react-instantsearch/dom'
import IconClose from 'react-icons/lib/md/close'
import classnames from 'classnames'

import './style.scss'

const isRange = (item) => item.currentRefinement.max && item.currentRefinement.min

function transformRange (item) {
  return {
    currentRefinement: item.currentRefinement,
    label: `${item.attributeName}: `,
    items: [{'label': item.label, value: item.value}]
  }
}

function transformItems (items) {
  return items.map(item => !isRange(item) ? item : transformRange(item))
}

function CustomCurrentRefinements (props) {
  return (
    <div data-app='search-current-filters' className={classnames('pb2', {
      'pt3': false
    })} >
      <CurrentRefinements
        transformItems={transformItems}
        translations={{
          clearFilter: <IconClose />
        }}
      />
    </div>
  )
}

export default CustomCurrentRefinements
