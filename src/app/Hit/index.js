import classnames from 'classnames'
import React, {createClass} from 'react'
import TimeAgo from 'react-timeago'

import {Highlight} from 'react-instantsearch/dom'
import Badge from '../Badge'

import './style.scss'

function formatter (value, unit, suffix) {
  const unitFirstChar = unit.charAt(0)
  return `${value}${unitFirstChar}`
}

function isRecently (timestamp) {
  const now = Date.now()
  const diff = now - timestamp
  const last24hours = 1000 * 60 * 60 * 24
  return diff < last24hours
}

function getTimestamp (item) {
  return item.updatedAt || item.createdAt
}

function renderPrice (item, className) {
  const {price} = item
  return (
    <span
      className={className}>
      {price ? `${price}€` : 'N/A'}
    </span>
  )
}

function renderTimestamp (timestamp) {
  return (
    <TimeAgo
      className='fr ma0 fw4 moon-gray'
      date={timestamp} formatter={formatter} />
  )
}

function renderImage (item, isHover, onHover) {
  const {provider} = item
  const imageURL = `/assets/img/provider/${provider}.jpg`
  const style = classnames('hit__image w-100 db br2', {
    'o-50': isHover
  })

  return (
    <img alt={provider} src={imageURL} className={style} />
  )
}

const Hit = createClass({
  getInitialState () {
    return {isHover: false}
  },

  onHover () {
    const {isHover} = this.state
    this.setState({isHover: !isHover})
  },

  renderBadge (item, timestamp) {
    const {isHover} = this.state
    return (
      <Badge
        isHover={isHover}>
        new
      </Badge>
    )
  },

  render () {
    const {props, state, onHover, renderBadge} = this
    const {item} = props
    const {isHover} = state

    const titleStyle = classnames('link fw6 helvetica mv0 navy', {
      'light-blue': isHover
    })

    const priceStyle = classnames('dit link green ma0', {
      'light-green': isHover
    })

    const timestamp = getTimestamp(item)

    return (
      <article
        data-app='hit'
        className='hit fade-in pa3 bg-white mb3 br2'
        onMouseEnter={onHover}
        onMouseLeave={onHover}
        >
        <a
          className='hit__link f5 flex link w-100 blue'
          href={item.link}
          target='_blank'
          rel='noopener'
          >

          <div className='hit__image-wrapper'>
            {renderImage(item, isHover, onHover)}
          </div>

          <div className='w-100 pl3 lh-copy'>
            <div className='flex justify-between'>
              <p className='ma0' style={{flexGrow: 1}}>
                {renderPrice(item, priceStyle)}
                {isRecently(timestamp) && renderBadge(item, timestamp)}
              </p>

              <p className='ma0' style={{flexGrow: 0}}>
                {renderTimestamp(timestamp)}
              </p>
            </div>

            <p className={titleStyle}>
              <Highlight attributeName='title' hit={item} />
            </p>
          </div>
        </a>
      </article>
    )
  }
})

export default Hit
