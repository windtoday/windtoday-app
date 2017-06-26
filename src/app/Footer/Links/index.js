import React from 'react'

const Links = (props) =>
  <div>
    <a
      href='https://blog.windtoday.co'
      target='_blank'
      title='Blog'
      className='f7 dib ph2 link blue-grey-200 hover-blue-400'>
      Blog
    </a>

    <a
      href='mailto:info@windtoday.co?subject=[windtoday]%20Contact'
      title='Contact'
      className='f7 dib ph2 link blue-grey-200 hover-blue-400'>
      Contact
    </a>

    <a
      href='https://blog.windtoday.co/pricing/'
      target='_blank'
      title='Add your shop'
      className='f7 dib ph2 link blue-grey-200 hover-blue-400'>
      Add your shop
    </a>
  </div>

export default Links
