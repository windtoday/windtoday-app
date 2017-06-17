import IconUsed from 'react-icons/lib/fa/hand-paper-o'
import IconTime from 'react-icons/lib/md/access-time'
import IconCategory from 'react-icons/lib/fa/tags'
import IconNew from 'react-icons/lib/ti/gift'
import React from 'react'

import Badge from '../Badge'
import ProductImage from '../ProductImage'
import ProductPrice from '../ProductPrice'
import ProductStars from '../ProductStars'
import ProductTitle from '../ProductTitle'
import './style.scss'

const ICON_SIZE = 20

const TIME_PERIOD = [
  {hours: 24, label: '24 hours'},
  {hours: 48, label: '48 hours'},
  {hours: 72, label: '3 days'},
  {hours: 120, label: '5 days'},
  {hours: 168, label: '1 week'},
  {hours: 336, label: '2 weeks'},
  {hours: 720, label: '1 month'},
  {hours: 2160, label: '3 months'}
]

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
  const timePeriod = TIME_PERIOD.find(({hours}) => isRecently(timestamp, hours))
  const {label = '+3 months'} = timePeriod
  return BadgeTime({label})
}

const renderBadge = (label, IconComponent) =>
  <Badge
    iconComponent={<IconComponent size={20} />}
    className='ml2'>
    {label}
  </Badge>

export default ({product}) => {
  const {condition, category} = product
  const timestamp = getTimestamp(product)

  return (
    <article
      data-app='search-hit'
      role='article'
      className='search-hit fade-in bg-white mv2 br2 pa3 h6'>

      <ProductStars product={product} />

      <a
        className='search-hit__link flex no-underline w-100 h-100 black'
        href={product.link}
        target='_blank'
        rel='nofollow noopener'>

        <div className='pv2 w-100 lh-copy f4 flex flex-column justify-around'>
          <p className='link lh-title mv0 blue-grey-900 fw5 w-95'>
            <ProductTitle product={product} />
          </p>

          <div className='ma0'>
            <ProductPrice
              className='blue-500 pr1'
              product={product}
               />
            {' '}
            <p className='tracked blue-grey-300 f6 di'>
              by <Highlight attributeName='provider' hit={product} />
            </p>
          </div>

          <p className='ma0'>
            {renderTime(timestamp)}
            {renderBadge(condition, condition === 'used' ? IconUsed : IconNew)}
            {renderBadge(category, IconCategory)}
          </p>

        </div>
        <ProductImage
          className='search-hit__image db br2 mt2'
          product={product}
          width={96}
        />
      </a>
    </article>
  )
}
