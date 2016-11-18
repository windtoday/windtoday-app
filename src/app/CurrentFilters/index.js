import React from 'react'
import {CurrentRefinements} from 'react-instantsearch/dom'
import IconClose from 'react-icons/lib/md/close'

import './style.scss'

function CustomCurrentFilters () {
  return (
    <div data-app='current-filters' >
      <CurrentRefinements
        translations={{
          clearFilter: <IconClose />
        }}
      />
    </div>
  )
}

export default CustomCurrentFilters
