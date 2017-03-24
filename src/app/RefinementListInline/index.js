import IconExpandMore from 'react-icons/lib/md/expand-more'
import IconExpandLess from 'react-icons/lib/md/expand-less'
import React, {createClass} from 'react'
import classnames from 'classnames'
import {connectRefinementList} from 'react-instantsearch/connectors'

function moreIcon () {
  return (
    <span>
      <IconExpandMore />
      more
    </span>
  )
}

function lessIcon () {
  return (
    <span>
      <IconExpandLess />
      less
    </span>
  )
}

const RefinementList = createClass({
  getInitialState () {
    return { extended: false }
  },

  isCapitalize () {
    const {attributeName} = this.props
    if (attributeName === 'mast size') return false
    if (attributeName === 'fin size') return false
    return true
  },

  isUpperCase () {
    const {attributeName} = this.props
    if (attributeName !== 'mast type') return false
    return true
  },

  renderItem (item, key) {
    const onChange = () => this.props.refine(item.value)

    return (
      <li className='dib mr1 mb2' key={key}>
        <a
          onClick={onChange}
          className={classnames('f6 b db pa1 pointer dim br2', {
            'bg-moon-gray': !item.isRefined,
            'bg-blue-grey-700': item.isRefined
          })}>
          <span className={classnames({
            'blue-grey-500': !item.isRefined,
            'blue-grey-100': item.isRefined
          })}>{item.label}</span>
          <span className={classnames('f7 pl2', {
            'blue-grey-400': !item.isRefined,
            'blue-grey-300': item.isRefined
          })}>{item.count}</span>
        </a>
      </li>
    )
  },

  getLimit () {
    const {limitMin, limitMax} = this.props
    const {extended} = this.state
    return extended ? limitMax : limitMin
  },

  onClick () {
    const {extended} = this.state
    this.setState({extended: !extended})
  },

  renderShowMore () {
    const {showMore, limitMin, items} = this.props
    const {extended} = this.state
    const {onClick} = this
    const disabled = limitMin >= items.length

    if (!showMore || items.length < limitMin) return

    return (
      <a disabled={disabled}
        onClick={onClick}
        className='pointer link dim db blue-grey-200 pt2'
      >
        {extended ? lessIcon() : moreIcon()}
      </a>
    )
  },

  render () {
    const {renderItem, renderShowMore, getLimit, props} = this
    const {attributeName, items} = props

    if (!items.length) return null
    const slicedItems = items.slice(0, getLimit())

    return (
      <article data-app='facet' data-facet={attributeName} className='mb1 pa3'>
        <header className='f6 fw6 ttu tracked pb3 cyan-500'>{attributeName}</header>
        {slicedItems.map(renderItem)}
        {renderShowMore()}
      </article>
    )
  }
})

export default connectRefinementList(RefinementList)
