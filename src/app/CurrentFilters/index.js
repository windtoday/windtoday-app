import React from 'react'
import {CurrentFilters} from 'react-instantsearch'
import IconClose from 'react-icons/lib/md/close'

import './style.scss'

function CustomCurrentFilters () {
  return (
    <div data-app='current-filters'>
      <CurrentFilters
        translations={{
          clearFilter: <IconClose />
        }}

        theme={{
          clearAll: 'dn',
          filter: 'grow dib br4 pa1 mv2 mr2 bg-near-white',
          filterLabel: 'pl2 v-mid',
          filterClear: 'ais-CurrentFilters__filterClear'
        }}
      />
    </div>
  )
}

export default CustomCurrentFilters
