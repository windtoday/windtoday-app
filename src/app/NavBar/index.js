import React from 'react'

import InputSearch from '../InputSearch'
import IconMenu from 'react-icons/lib/md/menu'
import IconFilter from 'react-icons/lib/md/filter-list'

export default function NavBar ({children}) {
  return (
    <nav className='bg-light-silver w-100 center pv3 flex justify-around items-center'>
      <IconMenu />
      <InputSearch />
      <IconFilter />
    </nav>
  )
}
