import React from 'react'
import {Hits} from 'react-instantsearch'

const Hit = ({item}) => {
  console.log(item)
  return (
    <section>
      <a className='link dt w-100 bb b--black-10 pb2 mt2 dim blue' href='#0'>
        <div className='dtc w3'>
          <img src={item.image} className='db w-100' />
        </div>
        <div className='dtc v-top pl2'>
          <p className='f6 f5-ns fw6 lh-title black mv0' dangerouslySetInnerHTML={{
            __html: item._highlightResult.name.value
          }} />
          <p className='f6 fw4 mt2 mb0 black-60' dangerouslySetInnerHTML={{
            __html: item._highlightResult.type.value
          }} />
          <dl className='mt2 f6'>
            <dt className='clip'>Price</dt>
            <dd className='ml0'>${item.price}</dd>
          </dl>
        </div>
      </a>
    </section>
  )
}

function CustomHits ({hits}) {
  return (
    <div className='ph7'>
      {hits.map((hit, idx) => <Hit item={hit} key={idx} />)}
    </div>
  )
}

export default Hits.connect(CustomHits)
