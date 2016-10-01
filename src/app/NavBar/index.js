import React from 'react'

import InputSearch from '../InputSearch'

export default function NavBar ({children}) {
  return (
    <nav className='bg-light-silver w-100 center pv3 flex justify-center'>
      <InputSearch />
    </nav>
  )
}
