import { Link } from 'react-router-dom'
import React from 'react'

import IconDash from '../Icon/dash'

const navLinkStyle = 'no-underline flex ttu b items-center justify-center flex-row h-100 ph3 f6 blue-300'

const categoryLink = category => `/search?refinementList%5Bcategory%5D%5B0%5D=${category}`

export default () => (
  <article
    className='w-100 bg-blue-500 white pt4'
    style={{background: 'linear-gradient(#19b5fe 0%, #31d0c9 100%)'}}
    >
    <div className='pb4 ph3 ph7-l tc lh-copy'>
      <p className='f2 avenir fw4 ma0 pv2 ph3'>
        windsurf marketplace <IconDash width={30} height={30} />
      </p>
      <p className='f4 fw3 reph5-ns'>
        windtoday is a <strong>windsurfing marketplace</strong> to discover, compare & choose daily equipment offers.
      </p>
    </div>

    <nav className='flex justify-around bg-white card-shadow overflow-y-visible overflow-x-scroll'>
      <ul className='appbar__navbar list flex ma0 pa0'>
        <li className='appbar__navbar-item'>
          <Link
            className={navLinkStyle}
            to={categoryLink('sails')}>Sails</Link>
        </li>
        <li className='appbar__navbar-item'>
          <Link
            className={navLinkStyle}
            to={categoryLink('boards')}>Boards</Link>
        </li>
        <li className='appbar__navbar-item'>
          <Link
            className={navLinkStyle}
            to={categoryLink('masts')}>Masts</Link>
        </li>
        <li className='appbar__navbar-item'>
          <Link
            className={navLinkStyle}
            to={categoryLink('fins')}>Fins</Link>
        </li>
        <li className='appbar__navbar-item'>
          <Link
            className={navLinkStyle}
            to={categoryLink('booms')}>Booms</Link>
        </li>
      </ul>
    </nav>
  </article>
)
