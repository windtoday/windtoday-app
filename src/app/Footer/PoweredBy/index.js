import React from 'react'
import IconAlgolia from '../../Icon/algolia'

const PoweredBy = () =>
  <span>
    Powered by
      <a
        href='https://algolia.com'
        target='_blank'
        className='link pointer ph1'
      >
        <IconAlgolia
          className='grow v-mid w3 v-btm'
          />
      </a>
  </span>

export default PoweredBy
