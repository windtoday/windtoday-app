import React from 'react'

import IconWindtoday from '../Icon/windtoday'

import Spinner from '../Spinner'

const phrases = [
  'applying enough sun cream',
  'correcting boom height position',
  'rigging the sail correctly'
]

const randomElement = phrases => (
  phrases[Math.floor(Math.random() * phrases.length)]
)

const phrase = randomElement(phrases)

export default () => (
  <article className='z-max fixed vh-100 dt w-100 bg-blue-500'>
    <div className='dtc v-mid tc'>
      <div>
        <IconWindtoday className='w4' style={{fill: 'white'}} />
      </div>

      <div className='pv3 white fw3'>
        <p className='f4'>{phrase}</p>
      </div>

      <div>
        <Spinner size='20px' />
      </div>
    </div>
  </article>
)
