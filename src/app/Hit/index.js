import React from 'react'

import './style.scss'

function price (item) {
  return item.price ? `€${item.price}` : 'N/A'
}

function image (item) {
  const imageURL = `/assets/img/provider/${item.provider}.jpg`
  return (
    <div data-hit='image' className='dtc v-mid'>
      <img src={imageURL} className='db w-100 br3' />
    </div>
  )
}

function date (item) {
  const locale = navigator.language

  const opts = {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }

  const timestamp = item.updatedAt || item.createdAt
  return (new Date(timestamp)).toLocaleString(locale, opts)
}

function Hit ({item, toggle, get}) {
  return (
    <section data-app='hit' className='bb b--near-white lh-title'>
      <a data-hit='link' className='link dt w-100 pv2 pv1-ns blue' href={item.shortenUrl} target='_blank'>

        {image(item)}

        <div className='dtc f4 w3 v-mid tc'>
          <p data-hit='price' className='dib ph2 ph3-ns'>{price(item)}</p>
        </div>

        <div className='dtc v-mid pr5'>
          <p data-hit='title' className='f6 f5-ns fw6 navy mv0 hover-blue' dangerouslySetInnerHTML={{
            __html: item._highlightResult.title.value
          }} />
          <p data-hit='date' className='f6 fw4 mt2 mb0 light-gray' >
            {date(item)}
          </p>
        </div>
      </a>
    </section>
  )
}

export default Hit
