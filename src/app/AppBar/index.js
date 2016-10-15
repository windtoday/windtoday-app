import React from 'react'
import IconMenu from 'react-icons/lib/md/menu'
import IconFilter from 'react-icons/lib/md/filter-list'

import InputSearch from '../InputSearch'
import './style.scss'

function AppBar ({children}) {
  return (
    <header data-app='app-bar' className='bg-white w-100 center pv3 flex justify-around items-center fixed z-1'>
      <IconMenu />
      <InputSearch />
      <IconFilter />
    </header>
  )
}

export default AppBar
