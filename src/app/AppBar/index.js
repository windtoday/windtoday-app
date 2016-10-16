import React from 'react'
import IconMenu from 'react-icons/lib/md/menu'

import SearchBox from '../SearchBox'
import Logo from '../Logo'
import './style.scss'

const iconStyle = 'dim pointer blue'

function AppBar (props) {
  const {toggle} = props

  return (
    <header data-app='app-bar' className='bg-white w-100 center pv3-l pv2 ph1 flex justify-around items-center fixed z-2'>
      <IconMenu className={iconStyle} onClick={toggle('facetsOpen')} />
      <Logo {...props} />
      <SearchBox {...props} />
    </header>
  )
}

export default AppBar
