import React from 'react'
import {CurrentFilters} from 'react-instantsearch'
import IconClose from 'react-icons/lib/md/close'

import './style.scss'

function CustomCurrentFilters () {
  return (
    <CurrentFilters
      translations={{
        clearFilter: <IconClose />
      }}
    />
  )
}

export default CustomCurrentFilters
