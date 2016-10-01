import React from 'react'

import Hits from '../Hits'
import InputSearch from '../InputSearch'
import NavBar from '../NavBar'

export default function Layout ({children}) {
  return (
    <article className='cf'>
      <div className='fl w-100 w-25-l bg-near-white tc' />

      <NavBar>
        <InputSearch />
      </NavBar >

      <div className='fl w-100 w-25-l bg-near-white tc vh-100'>
        <h2>Filters</h2>
      </div>
      <div className='fl w-100 w-75-l bg-light-gray tc'>
        <Hits />
      </div>
    </article>
  )
}
