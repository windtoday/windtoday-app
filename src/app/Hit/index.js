import classnames from 'classnames'
import React, {createClass} from 'react'
import TimeAgo from 'react-timeago'

import {Highlight} from 'react-instantsearch/dom'

import './style.scss'

function price (item) {
  return item.price ? `€${item.price}` : 'N/A'
}

function image (item, isHover, onHover) {
  const {provider} = item
  const imageURL = `/assets/img/provider/${provider}.jpg`
  const style = classnames('Hit-image db br3', {
    'o-50': isHover
  })

  return (
    <div className='Hit-image-wrapper dtc v-mid'>
      <img alt={provider} src={imageURL} className={style} />
    </div>
  )
}

function date (item) {
  const timestamp = item.updatedAt || item.createdAt
  return (
    <TimeAgo date={timestamp} />
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

    const priceStyle = classnames('Hit-price link dib ph2 ph3-l blue', {
      'light-blue': isHover
    })

    return (
      <section
        data-app='hit'
        className='Hit fade-in bb b--near-white'
        onMouseEnter={onHover}
        onMouseLeave={onHover}
        >
        <a
          data-hit='link'
          className='link dt w-100 pv2 pv1-l blue'
          href={item.link}
          target='_blank'
          rel='noopener'
          >

          {image(item, isHover, onHover)}

          <div className='dtc f4 w3 v-mid tc'>
            <p
              data-hit='price'
              className={priceStyle}
              >
              {price(item)}</p>
          </div>

          <div className='dtc v-mid pr3 lh-title'>
            <p
              data-hit='title'
              className={titleStyle}
              >
              <Highlight attributeName='title' hit={item} />
            </p>

            <p data-hit='date' className='f6 fw4 mt2 mb0 moon-gray sans-serif' >
              {date(item)}
            </p>
          </div>
        </a>
      </section>
    )
  }
})

export default Hit
