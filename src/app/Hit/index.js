import classnames from 'classnames'
import React, {createClass} from 'react'
import TimeAgo from 'react-timeago'

import {Highlight} from 'react-instantsearch/dom'
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

function price (item) {
  const {price} = item
  return price ? `€${price}` : 'N/A'
}

function image (item, isHover, onHover) {
  const {provider} = item
  const imageURL = `/assets/img/provider/${provider}.jpg`
  const style = classnames('hit__image w-100 db br3', {
    'o-50': isHover
  })

  return (
    <div className='hit__image-wrapper dtc v-mid'>
      <img alt={provider} src={imageURL} className={style} />
    </div>
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

  render () {
    const {props, state, onHover} = this
    const {item} = props

    const {isHover} = state

    const titleStyle = classnames('link f6 f5-l fw6 mv0 helvetica navy', {
      'light-blue': isHover
    })

    const priceStyle = classnames('hit__price link blue', {
      'light-blue': isHover
    })

    const timestamp = getTimestamp(item)

    return (
      <article
        data-app='hit'
        className='hit fade-in bb b--near-white pv1 ph3 ph4-l'
        onMouseEnter={onHover}
        onMouseLeave={onHover}
        >
        <a
          className='hit__link flex flex-row justify-center items-center link w-100 pv2 pv1-l blue'
          href={item.link}
          target='_blank'
          rel='noopener'
          >

          {image(item, isHover, onHover)}

          <p
            className={`f4 w3 tc ${priceStyle}`}
            >
            {price(item)}</p>

          <div className='flex-auto lh-copy'>
            <p
              className={titleStyle}
              >
              <Highlight attributeName='title' hit={item} />
              {isRecently(timestamp) && <Badge isHover={isHover}>new</Badge>}
            </p>

            <p className='f6 fw4 mt2 mb0 moon-gray sans-serif' >
              <TimeAgo date={timestamp} />
            </p>
          </div>
        </a>
      </article>
    )
  }
})

export default Hit
