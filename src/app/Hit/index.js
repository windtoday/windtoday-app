import IconTime from 'react-icons/lib/md/access-time'
import IconStar from 'react-icons/lib/md/star'
import IconNew from 'react-icons/lib/ti/gift'
import IconUsed from 'react-icons/lib/fa/hand-paper-o'
import IconCategory from 'react-icons/lib/fa/tags'
import {Highlight} from 'react-instantsearch/dom'
import React from 'react'

import Badge from '../Badge'
import './style.scss'

const ICON_SIZE = 20
const MAX_STARS = 5

const getTimestamp = item => item.updatedAt || item.createdAt

const BadgeTime = ({label, active = false}) =>
  <Badge
    iconComponent={<IconTime size={ICON_SIZE} />}
    active={active}>{label}
  </Badge>

const isRecently = (timestamp, hours) => {
  const lastHours = 1000 * 60 * 60 * hours
  return Date.now() - timestamp < lastHours
}

const renderTime = timestamp => {
  if (isRecently(timestamp, 24)) return BadgeTime({label: '24 hours'})
  if (isRecently(timestamp, 48)) return BadgeTime({label: '48 hours'})
  if (isRecently(timestamp, 72)) return BadgeTime({label: '3 days'})
  if (isRecently(timestamp, 120)) return BadgeTime({label: '1 week'})
  return BadgeTime({label: '1-3 months'})
}

const renderBadge = (label, IconComponent) =>
  <Badge
    iconComponent={<IconComponent size={20} />}
    className='ml2'>
    {label}
  </Badge>

function getImageUrl (item) {
  const {image, provider} = item
  if (!image) return `/assets/img/provider/${provider}.jpg`

  const el = document.createElement('a')
  el.href = image
  return `https://images.weserv.nl/?url=${el.hostname}${el.pathname}&w=96&t=fit`
}

function renderStars (activeStars) {
  const emptyStars = MAX_STARS - activeStars
  const stars = []
  let starKey = 0

  for (let i = 0; i < activeStars; i++) {
    stars.push(
      <IconStar key={++starKey} className='hit__start' />
    )
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <IconStar key={++starKey} className='hit__start hit__start--empty' />
    )
  }

  return <div>{stars}</div>
}

export default props => {
  const {item} = props
  const {price, title, condition, priceScore, category} = item

  const imageURL = getImageUrl(item)
  const priceText = price ? `${price}€` : 'N/A'

  const timestamp = getTimestamp(item)

  return (
    <article
      data-app='hit'
      role='article'
      className='hit fade-in bg-white mv2 br2 pa3 h6'>

      {renderStars(priceScore)}

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
            {renderTime(timestamp)}
            {renderBadge(condition, condition === 'used' ? IconUsed : IconNew)}
            {renderBadge(category, IconCategory)}
          </p>

        </div>
        <img alt={title} src={imageURL} className='hit__image db br2 mt2' />
      </a>
    </article>
  )
}
