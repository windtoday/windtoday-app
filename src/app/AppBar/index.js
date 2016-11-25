import React from 'react'
import IconMenu from 'react-icons/lib/md/menu'

import SearchBox from '../SearchBox'
import Logo from '../Logo'

const iconStyle = 'dim pointer blue'

function AppBar (props) {
  const {toggle} = props

  return (
    <header data-app='app-bar' className='bg-navy w-100 center pb2 pt1 ph1 flex justify-around items-center fixed z-max'>
      <IconMenu className={iconStyle} onClick={toggle('facetsOpen')} />
      <Logo {...props} />
      <SearchBox {...props} />
    </header>
  )
}

export default AppBar
