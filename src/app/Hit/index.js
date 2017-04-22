import {Highlight} from 'react-instantsearch/dom'
import React from 'react'

import Badge from '../Badge'

import './style.scss'

function isRecently (timestamp) {
  const now = Date.now()
  const diff = now - timestamp
  const last24hours = 1000 * 60 * 60 * 24
  return diff < last24hours
}

function getTimestamp (item) {
  return item.updatedAt || item.createdAt
}

export default (props) => {
  const {item} = props
  const {provider, price, image} = item

  const imageURL = image || `/assets/img/provider/${provider}.jpg`
  const priceText = price ? `${price}€` : 'N/A'
  const providerText = `by ${provider}`

  const timestamp = getTimestamp(item)

  return (
    <article
      data-app='hit'
      role='article'
      className='hit fade-in bg-white pa3 bb b--light-gray h6'
      >
      <a
        className='hit__link flex link w-100 h-100 black'
        href={item.link}
        target='_blank'
        rel='nofollow noopener'
        >

        <div className='w-100 lh-copy f4'>
          <p className='link fw4 lh-title mv0 blue-grey-700 w-95 pb1'>
            <Highlight attributeName='title' hit={item} />
            {!item.isForced && isRecently(timestamp) && <Badge>new</Badge>}
          </p>

          <p className='ma0'>
            <span
              className='cyan-500 b pr1'>{priceText}
            </span> <span
              className='tracked blue-grey-200 f6'>{providerText}</span>
          </p>

        </div>
        <img alt={provider} src={imageURL} className='hit__image db br2' />
      </a>
    </article>
  )
}
