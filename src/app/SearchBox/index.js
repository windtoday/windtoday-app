import React from 'react'
import {SearchBox} from 'react-instantsearch'
import IconSearch from 'react-icons/lib/md/search'

import './style.scss'

function CustomSearchBox (props) {
  const onChange = (e) => props.refine(e.target.value)

  return (
    <div data-app='searchbox' className='w-80 w-70-l pa2'>
      <IconSearch className='absolute pa2 f4 dark-gray' />
      <input
        className='w-100 f6 f5-l input-reset black-80 bg-near-white pt2 pr2 pb2 pl4 lh-solid br2 ba'
        type='text'
        value={props.query}
        onChange={onChange}
        autoFocus
      />
    </div>
  )
}

export default SearchBox.connect(CustomSearchBox)
