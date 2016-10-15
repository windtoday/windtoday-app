import React from 'react'
import {SearchBox} from 'react-instantsearch'

function InputSearch (props) {
  const onChange = (e) => props.refine(e.target.value)

  return (
    <input
      data-app='input-search'
      className='w-80 w-70-l f6 f5-l input-reset black-80 bg-near-white pa2 lh-solid br2 ba'
      type='text'
      value={props.query}
      onChange={onChange}
      autoFocus
    />
  )
}

export default SearchBox.connect(InputSearch)
