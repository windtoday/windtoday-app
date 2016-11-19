import React from 'react'
import Stats from '../Stats'
import Hit from '../Hit'

import './style.scss'

function CustomHits ({toggle, get, hits}) {
  const props = { toggle, get }

  return (
    <div data-app='hits' className='ph3 ph5-l'>
      <Stats />
      <div className='pv3 pv4-l'>
        {hits.map((item, key) => <Hit item={item} key={key} {...props} />)}
      </div>
    </div>
  )
}

export default CustomHits
