import React, {createClass, createElement} from 'react'
import IconMenu from 'react-icons/lib/md/menu'
import IconClose from 'react-icons/lib/md/close'
import IconFilter from 'react-icons/lib/md/filter-list'
import Headroom from 'react-headroom'
import classnames from 'classnames'
import { NavLink } from 'react-router-dom'

import SearchBox from '../SearchBox'
import Logo from './Logo'

import './style.scss'

const ICON_SIZE = 20

const renderIcon = IconComponent => props =>
  createElement(IconComponent, {...props, size: ICON_SIZE})

const AppBar = createClass({
  getInitialState () {
    return {
      scroll: window.pageYOffset
    }
  },
  componentDidMount () {
    window.addEventListener('scroll', () => {
      this.setState({scroll: window.pageYOffset})
    })
  },
  isPath (pathname) {
    return this.props.location.pathname === pathname
  },
  getAppBarStyle () {
    const {isPath, props, state} = this
    const {scroll} = state
    const {get} = props

    const isMobile = get('isMobile')
    const isSearchPath = isPath('/search')

    let backgroundColor = '#19B5FE'
    let position = 'fixed'

    if (!isMobile && isSearchPath) {
    } else if (scroll > 1) {
      backgroundColor = '#424242'
    }

    return {backgroundColor, position}
  },
  render () {
    const {getAppBarStyle, isPath} = this
    const {scroll} = this.state
    const {toggle, get} = this.props
    const isSearching = get('isSearching')()

    const asideLeftButton = get('searchFiltersLeftOpen')
    ? renderIcon(IconClose)
    : renderIcon(IconMenu)

    const asideRightButton = get('searchFiltersRightOpen')
    ? renderIcon(IconClose)
    : renderIcon(IconFilter)

    const darkStyle = scroll > 1

    const navLinkStyle = classnames('appbar__navbar-link no-underline flex ttu b items-center justify-center flex-row h-100 ph3 f6 blue-300', {
      'appbar__navbar-link--dark': darkStyle
    })

    const navLinkActiveStyle = classnames('appbar__navbar-link--active bl-0 br-0 bt-0 b--solid bw1')

    return (
      <header className='bg-blue-500'>
        <Headroom
          data-app='appbar'
          style={getAppBarStyle()}
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
            <ul className='appbar__navbar-list list flex'>
              <li className='appbar__navbar-item'>
                <NavLink
                  activeClassName={isPath('/') ? navLinkActiveStyle : ''}
                  className={navLinkStyle}
                  to='/'>Home</NavLink>
              </li>
              <li className='appbar__navbar-item relative'>
                <NavLink
                  activeClassName={isPath('/search') ? navLinkActiveStyle : ''}
                  className={navLinkStyle}
                  to='/search'>Search</NavLink>
              </li>
              <li className='appbar__navbar-item'>
                <a className={navLinkStyle}
                  target='_blank'
                  href='http://windtoday.co/blog'>Blog</a>
              </li>
            </ul>
          </nav>

        </Headroom>
      </header>
    )
  }

})

export default AppBar
