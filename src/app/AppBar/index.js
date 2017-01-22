import React from 'react'
import IconMenu from 'react-icons/lib/md/menu'
import IconClose from 'react-icons/lib/md/close'
import IconFilter from 'react-icons/lib/md/filter-list'

import SearchBox from '../SearchBox'
import Logo from '../Logo'

import './style.scss'

const renderMenuButton = (props) => <IconMenu {...props} />
const renderFilterButton = (props) => <IconFilter {...props} />
const renderCloseButton = (props) => <IconClose {...props} />

function AppBar (props) {
  const {toggle, get} = props
  const asideLeftButton = get('asideLeftOpen') ? renderCloseButton : renderMenuButton
  const asideRightButton = get('asideRightOpen') ? renderCloseButton : renderFilterButton

  return (
    <header
      data-app='app-bar'
      className='AppBar bg-white w-100 center pb2 pt1 ph1 flex justify-around items-center fixed z-2'>

      {asideLeftButton({
        className: 'dim pointer blue',
        onClick: toggle('asideLeftOpen')
      })}

      <Logo {...props} />
      <SearchBox {...props} />

      {asideRightButton({
        className: 'dim pointer blue',
        onClick: toggle('asideRightOpen')
      })}

    </header>
  )
}

export default AppBar
