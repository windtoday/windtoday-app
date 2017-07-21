import React from 'react'

import ColourMeLife from 'colour-me-life'
import IconScore from '../Icon/score'

const SIZE = '34px'

const gradient = new ColourMeLife()
  .setSpectrum('#6e4b46', '#9e6b64', '#1ac391')
  .setNumberRange(0, 100)

export default ({product, className, tiny}) => {
  const {priceScore} = product

  return (
    <div
      className='relative fr'
      style={{
        'width': SIZE,
        'height': SIZE
      }}
      >
      <IconScore
        className={`absolute ${className}`}
        style={{color: `#${gradient.colourAt(priceScore)}`}}
        />
      <span
        className='b absolute f7'
        style={{
          'top': '50%',
          'left': '50%',
          'transform': 'translate(-50%,-50%)'
        }}
        >{priceScore}</span>
    </div>
  )
}
