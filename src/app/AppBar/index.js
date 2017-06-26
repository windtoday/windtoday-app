import createClass from 'create-react-class'
import React, {createElement} from 'react'
import { NavLink } from 'react-router-dom'
import Headroom from 'react-headroom'
import classnames from 'classnames'

import IconLaunch from '../Icon/external-link'
import IconFacebook from '../Icon/facebook'
import IconTwitter from '../Icon/twitter'
import IconSearch from '../Icon/search'
import IconClose from '../Icon/close'
import SearchBox from '../SearchBox'
import IconFilter from '../Icon/filter'
import IconMenu from '../Icon/menu'
import IconHome from '../Icon/home'
import Logo from './Logo'

import './style.scss'

const ICON_SIZE = '20'

const renderIcon = IconComponent => props =>
  createElement(IconComponent, {width: ICON_SIZE, height: ICON_SIZE, ...props})

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

    const _isSearching = isSearching()

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
                'justify-between': _isSearching,
                'justify-end': !_isSearching
              })}

              style={{flexGrow: 1}}>
              {_isSearching && asideLeftButton({
                className: 'dim pointer white pr3',
                onClick: toggle('searchFiltersLeftOpen')
              })}

              <Logo {...this.props} clearsQuery />
            </div>

            <SearchBox className='order-2 mh3' {...this.props} />

            <div
              className='order-3 pa0 flex justify-between items-center'
              style={{flexGrow: 1}}>
              {_isSearching && asideRightButton({
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
                  <IconHome className='appbar__navbar__icon' height={ICON_SIZE} width={ICON_SIZE} />
                  <span className='pl2'>Home</span>
                </NavLink>
              </li>
              <li className='appbar__navbar-item'>
                <NavLink
                  activeClassName={isSearch ? navLinkActiveStyle : ''}
                  className={navLinkStyle}
                  to='/search'>
                  <IconSearch className='appbar__navbar__icon' height={ICON_SIZE} width={ICON_SIZE} />
                  <span className='pl2'>Search</span>
                </NavLink>
              </li>
              {isDesktop &&
                <li className='appbar__navbar-item'>
                  <a className={navLinkStyle}
                    target='_blank'
                    href='http://blog.windtoday.co/pricing/'>
                    <IconLaunch className='appbar__navbar__icon' height={ICON_SIZE} width={ICON_SIZE} />
                    <span className='pl2'>Add your shop</span>
                  </a>
                </li>
              }
              <li className='appbar__navbar-item'>
                <a
                  className={navLinkStyle}
                  href='https://facebook.com/windtodayco'
                  rel='noopener'
                  target='_blank'>
                  <IconFacebook
                    className='appbar__navbar__icon'
                    height={ICON_SIZE}
                    width={ICON_SIZE}
                   />
                </a>
              </li>
              <li className='appbar__navbar-item'>
                <a
                  className={navLinkStyle}
                  href='https://twitter.com/windtodayco'
                  rel='noopener'
                  target='_blank'>
                  <IconTwitter
                    className='appbar__navbar__icon'
                    height={ICON_SIZE}
                    width={ICON_SIZE}
                   />
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
