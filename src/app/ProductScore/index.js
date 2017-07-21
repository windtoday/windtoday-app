import React from 'react'

import CircularProgressbar from 'react-circular-progressbar'
import ColourMeLife from 'colour-me-life'

import './style.scss'

const SIZE = '30px'

const gradient = new ColourMeLife()
  .setSpectrum('#6e4b46', '#9e6b64', '#1ac391')
  .setNumberRange(0, 100)

export default ({product, className, tiny}) => {
  const {priceScore} = product

  return (
    <div
      className='relative fr br-100'
      style={{
        'width': SIZE,
        'height': SIZE,
        backgroundColor: `#${gradient.colourAt(priceScore)}`
      }}
      >
      <CircularProgressbar
        className={`absolute ${className}`}
        percentage={priceScore}
        textForPercentage={() => ''}
        strokeWidth={6}
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
