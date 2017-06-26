import IconFilter from 'react-icons/lib/md/filter-list'
import IconSearch from 'react-icons/lib/md/search'
import IconLaunch from 'react-icons/lib/md/launch'
import IconClose from 'react-icons/lib/md/close'
import IconMenu from 'react-icons/lib/md/menu'
import IconHome from 'react-icons/lib/md/home'
import createClass from 'create-react-class'
import React, {createElement} from 'react'
import { NavLink } from 'react-router-dom'
import Headroom from 'react-headroom'
import classnames from 'classnames'

import SearchBox from '../SearchBox'
import Logo from './Logo'

import './style.scss'

const ICON_SIZE = 20

const renderIcon = IconComponent => props =>
  createElement(IconComponent, {...props, size: ICON_SIZE})

const AppBar = createClass({
  isPath (pathname) {
    return this.props.location.pathname === pathname
  },
  render () {
    const {isPath} = this
    const {toggle, get, isSearching} = this.props

    const asideLeftButton = get('searchFiltersLeftOpen')
    ? renderIcon(IconClose)
    : renderIcon(IconMenu)

    const asideRightButton = get('searchFiltersRightOpen')
    ? renderIcon(IconClose)
    : renderIcon(IconFilter)

    const navLinkStyle = 'appbar__navbar-link no-underline flex b items-center justify-center flex-row h-100 ph3 f6 white-50'

    const navLinkActiveStyle = classnames('appbar__navbar-link--active bl-0 br-0 bt-0 b--solid bw1')

    const isSearch = isPath('/search')
    const isHome = isPath('/')
    const isDesktop = get('isDesktop')
    const isFallback = isSearch && isDesktop
    const HeaderComponent = isFallback ? 'div' : Headroom

    return (
      <header className={classnames('bg-blue-500', {
        'headroom--fallback': isSearch && isDesktop
      })}>
        <HeaderComponent
          data-app='appbar'
          className='headroom'
          >

          <div className='appbar__topbar flex justify-around items-center ph3 ph5-ns'>
            <div
              className={classnames('order-1 pa0 ma0 flex items-center', {
                'justify-between': isSearching,
                'justify-end': !isSearching
              })}

              style={{flexGrow: 1}}>
              {isSearching && asideLeftButton({
                className: 'dim pointer white pr3',
                onClick: toggle('searchFiltersLeftOpen')
              })}

              <Logo {...this.props} clearsQuery />
            </div>

            <SearchBox className='order-2 mh3' {...this.props} />

            <div
              className='order-3 pa0 flex justify-between items-center'
              style={{flexGrow: 1}}>
              {isSearching && asideRightButton({
                className: 'dim pointer white pl3',
                onClick: toggle('searchFiltersRightOpen')
              })}
            </div>
          </div>

          <nav className='appbar__navbar flex justify-center'>
            <ul className='list flex ma0 pa0'>
              <li className='appbar__navbar-item'>
                <NavLink
                  activeClassName={isHome ? navLinkActiveStyle : ''}
                  className={navLinkStyle}
                  to='/'>
                  <IconHome size={ICON_SIZE} />
                  <span className='pl1'>Home</span>
                </NavLink>
              </li>
              <li className='appbar__navbar-item relative'>
                <NavLink
                  activeClassName={isSearch ? navLinkActiveStyle : ''}
                  className={navLinkStyle}
                  to='/search'>
                  <IconSearch size={ICON_SIZE} />
                  <span className='pl1'>Search</span>
                </NavLink>
              </li>
              <li className='appbar__navbar-item'>
                <a className={navLinkStyle}
                  target='_blank'
                  href='http://blog.windtoday.co/pricing/'>
                  <IconLaunch size={ICON_SIZE} />
                  <span className='pl1'>Add your shop</span>
                </a>
              </li>
            </ul>
          </nav>

        </HeaderComponent>
      </header>
    )
  }

})

export default AppBar
