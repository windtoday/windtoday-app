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
  render () {
    const {scroll} = this.state
    const {toggle, get} = this.props

    const isSearching = get('isSearching')()

    const asideLeftButton = get('searchFiltersLeftOpen')
    ? renderIcon(IconClose)
    : renderIcon(IconMenu)

    const asideRightButton = get('searchFiltersRightOpen')
    ? renderIcon(IconClose)
    : renderIcon(IconFilter)

    return (
      <header className='bg-blue-500'>
        <Headroom
          data-app='appbar'
          style={{
            backgroundColor: scroll > 1 && '#424242'
          }}
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
                  activeClassName='appbar__navbar-link--active'
                  className='appbar__navbar-link no-underline flex ttu b items-center justify-center flex-row h-100 ph3 blue-300 f6'
                  to='/'>Home</NavLink>
              </li>
              <li className='appbar__navbar-item relative'>
                <NavLink
                  activeClassName='appbar__navbar-link--active'
                  className='appbar__navbar-link no-underline flex ttu b items-center justify-center flex-row h-100 ph3 blue-300 f6' to='/search'>Search</NavLink>
              </li>
              <li className='appbar__navbar-item'>
                <a className='appbar__navbar-link no-underline flex ttu b items-center justify-center flex-row h-100 ph3 blue-300 f6' href='/'>Insights</a>
              </li>
              <li className='appbar__navbar-item'>
                <a className='appbar__navbar-link no-underline flex ttu b items-center justify-center flex-row h-100 ph3 blue-300 f6' href='/'>Blog</a>
              </li>
              <li className='appbar__navbar-item'>
                <a className='appbar__navbar-link no-underline flex ttu b items-center justify-center flex-row h-100 ph3 blue-300 f6' href='/'>About</a>
              </li>
            </ul>
          </nav>

        </Headroom>
      </header>
    )
  }

})

export default AppBar
