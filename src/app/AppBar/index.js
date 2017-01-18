import React from 'react'
import IconMenu from 'react-icons/lib/md/menu'
import IconClose from 'react-icons/lib/md/close'

import SearchBox from '../SearchBox'
import Logo from '../Logo'

import './style.scss'

const renderMenuButton = (props) => <IconMenu {...props} />
const renderCloseButton = (props) => <IconClose {...props} />

function AppBar (props) {
  const {toggle, get} = props
  const renderButton = get('facetsOpen') ? renderCloseButton : renderMenuButton

  return (
    <header
      data-app='app-bar'
      className='AppBar bg-white w-100 center pb2 pt1 ph1 flex justify-around items-center fixed z-2'>
      {renderButton({
        className: 'dim pointer blue',
        onClick: toggle('facetsOpen')
      })}

      <Logo {...props} />
      <SearchBox {...props} />
    </header>
  )
}

export default AppBar
