
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
    <header data-app='appbar' className='appbar fixed z-5 w-100'>

      <div className='appbar__topbar flex justify-around items-center ph3 ph5-ns'>
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
      </div>

      <nav className='appbar__navbar flex justify-center'>
        <ul className='appbar__navbar-list list flex'>
          <li className='appbar__navbar-item appbar__navbar-item--active'>
            <a className='appbar__navbar-link link flex ttu b items-center justify-center flex-row h-100 ph3 blue-300 f6' href='/'>Home</a>
          </li>
          <li className='appbar__navbar-item relative'>
            <a className='appbar__navbar-link link flex ttu b items-center justify-center flex-row h-100 ph3 blue-300 f6' href='/'>Categories</a>
          </li>
          <li className='appbar__navbar-item'>
            <a className='appbar__navbar-link link flex ttu b items-center justify-center flex-row h-100 ph3 blue-300 f6' href='/'>Insights</a>
          </li>
          <li className='appbar__navbar-item'>
            <a className='appbar__navbar-link link flex ttu b items-center justify-center flex-row h-100 ph3 blue-300 f6' href='/'>Blog</a>
          </li>
          <li className='appbar__navbar-item'>
            <a className='appbar__navbar-link link flex ttu b items-center justify-center flex-row h-100 ph3 blue-300 f6' href='/'>About</a>
          </li>
        </ul>
      </nav>

    </header>
  )
}

export default AppBar
