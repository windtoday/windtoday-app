import React from 'react'

const Links = (props) =>
  <div>
    <a
      href='mailto:info@windtoday.co?subject=[windtoday]%20Report%20a%20Bug'
      title='Report a Bug'
      className='f6 dib ph2 link grey-400 hover-blue-500'>
      Report a Bug
    </a>

    <a
      href='mailto:info@windtoday.co?subject=[windtoday]%20Contact'
      title='Contact'
      className='f6 dib ph2 link grey-400 hover-blue-500'>
      Contact
    </a>

    <a
      href='mailto:info@windtoday.co?subject=[windtoday]%20Send%20Feedback'
      title='Send Feedback'
      className='f6 dib ph2 link grey-400 hover-blue-500'>
      Send Feedback
    </a>
  </div>

export default Links
