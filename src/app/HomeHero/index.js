import React from 'react'

const navLinkStyle = 'no-underline flex ttu b items-center justify-center flex-row h-100 ph3 f6 blue-300'

export default () => (
  <article className='w-100 bg-blue-500 white pt4'>
    <div className='pb4 ph3 ph7-ns tc lh-copy'>
      <p className='f2 avenir fw3 ma0 pv2'>
        windsurf marketplace 💨
      </p>
      <p className='f4 ph5-ns'>
        windtoday is a <strong>windsurfing marketplace</strong> to discover, compare & choose daily equipment offers.
      </p>
    </div>

    <nav className='flex justify-center bg-white card-shadow overflow-y-visible overflow-x-scroll'>
      <ul className='list flex'>
        <li className=''>
          <a
            className={navLinkStyle}
            target='_blank'
            href='/'>Sails</a>
        </li>
        <li className=''>
          <a
            className={navLinkStyle}
            target='_blank'
            href='/'>Boards</a>
        </li>
        <li className=''>
          <a
            className={navLinkStyle}
            target='_blank'
            href='/'>Masts</a>
        </li>
        <li className=''>
          <a
            className={navLinkStyle}
            target='_blank'
            href='/'>Fins</a>
        </li>
        <li className=''>
          <a
            className={navLinkStyle}
            target='_blank'
            href='/'>Booms</a>
        </li>
        <li className=''>
          <a
            className={navLinkStyle}
            target='_blank'
            href='/'>Accesories</a>
        </li>
      </ul>
    </nav>
  </article>
)
