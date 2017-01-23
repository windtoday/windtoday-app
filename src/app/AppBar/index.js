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
      className='AppBar bg-white w-100 center pb2 pt1 ph3 flex justify-around items-center fixed z-2'>

      {asideLeftButton({
        className: 'order-1 dim pointer blue',
        onClick: toggle('asideLeftOpen')
      })}

      <Logo className='order-2' {...props} />
      <SearchBox className='order-3' {...props} />

      <div className='Changelog order-4' />

      {asideRightButton({
        className: 'order-5 dim pointer blue mn0-ns ml2',
        onClick: toggle('asideRightOpen')
      })}

    </header>
  )
}

export default AppBar
