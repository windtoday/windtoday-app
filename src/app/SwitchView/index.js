import IconList from 'react-icons/lib/md/view-list'
import IconGrid from 'react-icons/lib/md/view-module'
import classnames from 'classnames'
import React from 'react'

import './style.scss'

export default ({get, set}) => {
  const hitComponent = get('hitComponent')
  const isList = hitComponent === 'list'
  const isGrid = !isList

  return (
    <span className='fr'>
      <span
        className={classnames('switch-view__list pointer pa1 ', {
          'bg-white': !isList,
          'bg-blue-500': isList
        })}
        onClick={() => { !isList && set('hitComponent', 'list') }}
        >
        <IconList size={25} style={{fill: isList && 'white'}} />
      </span>
      <span
        className={classnames('switch-view__grid pointer pa1 ', {
          'bg-white': !isGrid,
          'bg-blue-500': isGrid
        })}
        onClick={() => { !isGrid && set('hitComponent', 'grid') }}
        >
        <IconGrid size={25} style={{fill: isGrid && 'white'}} />
      </span>
    </span>
  )
}
