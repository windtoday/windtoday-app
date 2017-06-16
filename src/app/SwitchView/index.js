import IconList from 'react-icons/lib/md/view-list'
import IconGrid from 'react-icons/lib/md/view-module'
import createClass from 'create-react-class'
import classnames from 'classnames'
import React from 'react'

import './style.scss'

export default createClass({
  getInitialState () {
    return {
      active: 'list'
    }
  },

  setActive (name) {
    return () => this.setState({active: name})
  },

  isActive (name) {
    return this.state.active === name
  },

  render () {
    const {setActive, isActive} = this
    const isGrid = isActive('grid')
    const isList = isActive('list')

    return (
      <span className='fr'>
        <span
          className={classnames('switch-view__list pointer pa1 ', {
            'bg-white': !isList,
            'bg-blue-500': isList
          })}
          onClick={setActive('list')}
          >
          <IconList size={25} style={{fill: isList && 'white'}} />
        </span>
        <span
          className={classnames('switch-view__grid pointer pa1 ', {
            'bg-white': !isGrid,
            'bg-blue-500': isGrid
          })}
          onClick={setActive('grid')}
          >
          <IconGrid size={25} style={{fill: isGrid && 'white'}} />
        </span>
      </span>
    )
  }
})
