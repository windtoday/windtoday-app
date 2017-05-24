import IconTime from 'react-icons/lib/md/access-time'
import {Highlight} from 'react-instantsearch/dom'
import React from 'react'

import Badge from '../Badge'

import './style.scss'

const getTimestamp = item => item.updatedAt || item.createdAt

const renderTimeIcon = time => (
  <Badge
    iconComponent={<IconTime size={20} />}
    className='ml1'>{time}</Badge>
)

const isRecently = (timestamp, hours) => {
  const lastHours = 1000 * 60 * 60 * hours
  return Date.now() - timestamp < lastHours
}

const getTimeIcon = timestamp => {
  if (isRecently(timestamp, 24)) return renderTimeIcon('24 Hours')
  if (isRecently(timestamp, 48)) return renderTimeIcon('48 Hours')
  if (isRecently(timestamp, 72)) return renderTimeIcon('3 Days')
  if (isRecently(timestamp, 120)) return renderTimeIcon('1 Week')
  return renderTimeIcon('1 Month')
}

const renderPopularIcon = rarity => {
  return (
    <Badge
      iconComponent={
        <img
          alt={rarity}
          className='v-mid'
          src={`/assets/img/popular/${rarity}.svg`}
        />
      }
      className='mr1'>{rarity}</Badge>
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
  const {price, title} = item

  const imageURL = getImageUrl(item)
  const priceText = price ? `${price}€` : 'N/A'

  const timestamp = getTimestamp(item)

  return (
    <article
      data-app='hit'
      role='article'
      className='hit fade-in bg-white mv2 br2 pa3 h6'>

      <a
        className='hit__link flex link w-100 h-100 black'
        href={item.link}
        target='_blank'
        rel='nofollow noopener'>

        <div className='pv2 w-100 lh-copy f4 flex flex-column justify-around'>
          <p className='link lh-title mv0 blue-grey-900 fw5 w-95'>
            <Highlight attributeName='title' hit={item} />
          </p>

          <div className='ma0'>
            <span className='blue-500 pr1'>{priceText}</span>
            {' '}
            <p className='tracked blue-grey-300 f6 di'>
              by <Highlight attributeName='provider' hit={item} />
            </p>
          </div>

          <p className='ma0'>
            {getPopularIcon(item)}
            {getTimeIcon(timestamp)}
          </p>

        </div>
        <img alt={title} src={imageURL} className='hit__image db br2 pt3' />
      </a>
    </article>
  )
}
