import React, {createElement} from 'react'
import IconMenu from 'react-icons/lib/md/menu'
import IconClose from 'react-icons/lib/md/close'
import IconFilter from 'react-icons/lib/md/filter-list'

import SearchBox from '../SearchBox'
import Logo from './Logo'

import './style.scss'

const ICON_SIZE = 20

const renderIcon = IconComponent => props =>
  createElement(IconComponent, {...props, size: ICON_SIZE})

function AppBar (props) {
  const {toggle, get} = props

  const asideLeftButton = get('asideLeftOpen')
  ? renderIcon(IconClose)
  : renderIcon(IconMenu)

  const asideRightButton = get('asideRightOpen')
  ? renderIcon(IconClose)
  : renderIcon(IconFilter)

  return (
    <header
      role='banner'
      data-app='appbar'
      className='appbar bg-blue-700 w-100 ph3 ph5-ns flex justify-around items-center fixed z-5 card-shadow'>

      <div
        className='order-1 pa0 ma0 flex justify-between items-center'
        style={{flexGrow: 1}}>
        {asideLeftButton({
          className: 'dim pointer white pr3',
          onClick: toggle('asideLeftOpen')
        })}

        <Logo {...props} clearsQuery />
      </div>

      <SearchBox className='order-2 mh3' {...props} />

      <div
        className='order-3 pa0 flex justify-between items-center'
        style={{flexGrow: 1}}>
        {asideRightButton({
          className: 'dim pointer white pl3',
          onClick: toggle('asideRightOpen')
        })}
      </div>

    </header>
  )
}

export default AppBar
