import React from 'react'

import IconWindFlagDown from '../Icon/windFlagDown'

export default ({noResults, query}) => (
  <article data-app='search-no-hits' className='tc pa4-l pa4'>
    <IconWindFlagDown className='w4 pv4' />
    <h1 className='no-break blue-300 f3'>
      <span className='fw6' style={{borderBottom: '1px dashed white'}}>
        {query}
      </span>
    </h1>
    <h2 className='ph4 grey-500 f3'>
      has not been seen in the last days.
    </h2>
  </article>
)
