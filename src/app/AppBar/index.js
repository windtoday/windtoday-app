import React from 'react'
import IconMenu from 'react-icons/lib/md/menu'
import IconFilter from 'react-icons/lib/md/filter-list'

import InputSearch from '../InputSearch'
import './style.scss'

function AppBar ({children}) {
  return (
    <header className='bg-white w-100 center pv3 flex justify-around items-center'>
      <IconMenu />
      <InputSearch />
      <IconFilter />
    </header>
  )
}

export default AppBar
