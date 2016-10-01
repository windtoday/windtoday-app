import React from 'react'

import {SearchBox} from 'react-instantsearch'

function InputSearch (props) {
  const onChange = (e) => props.refine(e.target.value)

  return (
    <input
      className='w-80 w-70-l f6 f5-l input-reset bn black-80 bg-white pa2 lh-solid br2-ns br--left-ns'
      type='text'
      value={props.query}
      onChange={onChange}
    />
  )
}

export default SearchBox.connect(InputSearch)
