import classnames from 'classnames'
import React, {createClass} from 'react'
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

function renderPrice (item) {
  const {price, provider} = item
  const priceText = price ? `${price}€` : 'N/A'
  const providerText = `by ${provider}`

  return (
    <div>
      <span
        className='cyan-500 b pr1'>{priceText}
      </span> <span
        className='tracked blue-grey-200 f6'>{providerText}</span>
    </div>

  )
}

function renderImage (item, isHover, onHover) {
  const {provider, image} = item
  const imageURL = image || `/assets/img/provider/${provider}.jpg`
  const style = classnames('hit__image db br2')

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

    const titleStyle = classnames('link fw4 lh-title mv0 blue-grey-700 w-90 pb1')

    const timestamp = getTimestamp(item)

    return (
      <article
        data-app='hit'
        role='article'
        className='hit fade-in bg-white pa3 bb b--light-gray h6'
        onMouseEnter={onHover}
        onMouseLeave={onHover}
        >
        <a
          className='hit__link flex link w-100 h-100 black'
          href={item.link}
          target='_blank'
          rel='nofollow'
          >

          <div className='w-100 lh-copy f4'>
            <p className={titleStyle}>
              <Highlight attributeName='title' hit={item} />
              {!item.isForced && isRecently(timestamp) && renderBadge(item, timestamp)}
            </p>

            <div className='flex justify-between'>
              <p className='ma0 flex' style={{flexGrow: 1}}>
                {renderPrice(item)}
              </p>
            </div>
          </div>

          {renderImage(item, isHover, onHover)}
        </a>
      </article>
    )
  }
})

export default Hit
