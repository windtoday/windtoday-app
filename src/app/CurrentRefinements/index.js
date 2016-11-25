import React from 'react'
import {CurrentRefinements} from 'react-instantsearch/dom'
import IconClose from 'react-icons/lib/md/close'

import './style.scss'

function CustomCurrentRefinements () {
  return (
    <div data-app='current-filters' >
      <CurrentRefinements
        translations={{
          clearFilter: <IconClose style={{verticalAlign: 'baseline'}} />
        }}
      />
    </div>
  )
}

export default CustomCurrentRefinements
