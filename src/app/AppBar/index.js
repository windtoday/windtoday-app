import React from 'react'
import IconMenu from 'react-icons/lib/md/menu'
import IconClose from 'react-icons/lib/md/close'
import IconFilter from 'react-icons/lib/md/filter-list'

import SearchBox from '../SearchBox'
import Logo from '../Logo'

import './style.scss'

const renderMenuButton = (props) => <IconMenu size={20} {...props} />
const renderFilterButton = (props) => <IconFilter size={20} {...props} />
const renderCloseButton = (props) => <IconClose size={20} {...props} />

function AppBar (props) {
  const {toggle, get} = props
  const asideLeftButton = get('asideLeftOpen') ? renderCloseButton : renderMenuButton
  const asideRightButton = get('asideRightOpen') ? renderCloseButton : renderFilterButton

  return (
    <header
      data-app='appbar'
      className='appbar bg-gradient shadow-2 w-100 ph3 flex justify-around items-center fixed z-5'>

      {asideLeftButton({
        className: 'order-1 dim pointer white',
        onClick: toggle('asideLeftOpen')
      })}

      <Logo className='order-2' {...props} />
      <SearchBox className='order-3' {...props} />

      <div className='changelog order-4' />

      {asideRightButton({
        className: 'order-5 dim pointer white',
        onClick: toggle('asideRightOpen')
      })}

    </header>
  )
}

export default AppBar
