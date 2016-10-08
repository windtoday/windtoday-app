import React from 'react'
import {Hits} from 'react-instantsearch'

import Pagination from '../Pagination'
import Stats from '../Stats'

function price (item) {
  if (item.price) {
    return (
      <dl className='mt2 f6'>
        <dt className='clip'>Price</dt>
        <dd className='ml0'>{item.price}€</dd>
      </dl>
    )
  }
}

function image (item) {
  const link = `/assets/img/${item.provider}.jpeg`

  return (
    <div className='dtc w3'>
      <img src={link} className='db w-100 br-100' />
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

function Hit ({item}) {
  return (
    <section>
      <a className='link dt w-100 bb b--black-10 pb2 mt2 dim blue' href={item.link}>

        {image(item)}

        <div className='dtc v-top pl2'>
          <p className='f6 f5-ns fw6 lh-title black mv0' dangerouslySetInnerHTML={{
            __html: item._highlightResult.title.value
          }} />
          <p className='f6 fw4 mt2 mb0 black-60' >
            {date(item)}
          </p>
          {price(item)}
        </div>
      </a>
    </section>
  )
}

function CustomHits ({hits}) {
  return (
    <div className='ph3 ph7-l'>
      <Stats />
      {hits.map((hit, idx) => <Hit item={hit} key={idx} />)}
      <Pagination />
    </div>
  )
}

export default Hits.connect(CustomHits)
