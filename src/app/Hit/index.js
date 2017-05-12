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

const getTimestamp = item => item.updatedAt || item.createdAt

const renderPopularIcon = rarity => {
  return (
    <img className='pl1' src={`/assets/img/popular/${rarity}.svg`} />
  )
}

function getPopularIcon (item) {
  const {priceScore} = item
  if (priceScore < 0.5) return
  if (priceScore > 0.95) return renderPopularIcon('legendary')
  if (priceScore > 0.80) return renderPopularIcon('epic')
  if (priceScore > 0.70) return renderPopularIcon('rare')
  return renderPopularIcon('uncommon')
}

function getImageUrl (item) {
  const {image, provider} = item
  if (!image) return `/assets/img/provider/${provider}.jpg`

  const el = document.createElement('a')
  el.href = image
  return `https://images.weserv.nl/?url=${el.hostname}${el.pathname}&w=96&t=fit`
}

export default props => {
  const {item} = props
  const {provider, price} = item

  const imageURL = getImageUrl(item)
  const priceText = price ? `${price}€` : 'N/A'

  const timestamp = getTimestamp(item)

  return (
    <article
      data-app='hit'
      role='article'
      className='hit fade-in bg-white pa3 bb b--light-gray h6'>
      <a
        className='hit__link flex link w-100 h-100 black'
        href={item.link}
        target='_blank'
        rel='nofollow noopener'>

        <div className='w-100 lh-copy f4'>
          <p className='link fw4 lh-title mv0 blue-grey-700 w-95 pb1'>
            <Highlight attributeName='title' hit={item} />
            {getPopularIcon(item)}
            {!item.isForced && isRecently(timestamp) && <Badge>new</Badge>}
          </p>

          <div className='ma0'>
            <span className='cyan-500 b pr1'>{priceText}</span>
            {' '}
            <p className='tracked blue-grey-200 f6 di'>
              by <Highlight attributeName='provider' hit={item} />
            </p>
          </div>

        </div>
        <img alt={provider} src={imageURL} className='hit__image db br2' />
      </a>
    </article>
  )
}
