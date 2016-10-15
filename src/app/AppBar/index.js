import React from 'react'
import IconMenu from 'react-icons/lib/md/menu'

import SearchBox from '../SearchBox'
import Logo from '../Logo'
import './style.scss'

const iconStyle = 'dim pointer blue'

function AppBar ({toggle, get}) {
  return (
    <header data-app='app-bar' className='bg-white w-100 center pv3 flex justify-around items-center fixed z-1 ph4'>
      <IconMenu className={iconStyle} onClick={toggle('facetsOpen')} />
      <Logo />
      <SearchBox />
    </header>
  )
}

export default AppBar
