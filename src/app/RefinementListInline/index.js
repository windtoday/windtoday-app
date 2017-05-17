import IconExpandMore from 'react-icons/lib/md/expand-more'
import IconSearch from 'react-icons/lib/md/search'
import IconExpandLess from 'react-icons/lib/md/expand-less'
import React, {createClass} from 'react'
import classnames from 'classnames'
import {connectRefinementList} from 'react-instantsearch/connectors'

import './style.scss'

const moreIcon = () => <span><IconExpandMore />more</span>
const lessIcon = () => <span><IconExpandLess />less</span>

function getPlaceholder (attributeName) {
  const arr = attributeName.split(' ')
  return arr[arr.length - 1]
}

const RefinementList = createClass({
  getInitialState () {
    return {
      focus: false,
      extended: false
    }
  },

  onInputMount (input) {
    this.input = input
  },

  onFocus (event) {
    this.setState({focus: true})
  },

  onBlur (e) {
    this.setState({focus: false})
  },

  onMouseEnter (e) {
    this.setState({hover: true})
  },

  onMouseLeave (e) {
    this.setState({hover: true})
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
    const {count, label} = item
    const onChange = () => this.props.refine(item.value)

    return (
      <li className='dib mr1 mb2' key={key}>
        <a
          onClick={onChange}
          className={classnames(
            'refinementlist-inline__link f6 db pa1 pointer br2',
            {
              'bg-grey-100': !item.isRefined,
              'bg-blue-500': item.isRefined
            }
          )}>
          <span
            className={classnames('refinementlist-inline__label', {
              'blue-500': !item.isRefined,
              'white': item.isRefined
            })}>
            {label}
          </span>
          <span
            className={classnames('refinementlist-inline__count f7 pl2', {
              'blue-200': !item.isRefined,
              'grey-200': item.isRefined
            })}>
            {count}
          </span>
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
      <a
        disabled={disabled}
        onClick={onClick}
        className='pointer link dim db blue-grey-200 pt2'>
        {extended ? lessIcon() : moreIcon()}
      </a>
    )
  },

  onSubmit (e) {
    e.preventDefault()
    e.stopPropagation()
    this.input.blur()
    return false
  },

  renderSearchBox () {
    const {props, onFocus, onBlur, onSubmit, onInputMount} = this
    const {focus: isFocus} = this.state
    const {attributeName, searchForItems} = props

    return (
      <form
        noValidate
        role='search'
        onMouseEnter={onFocus}
        onFocus={onFocus}
        onBlur={onBlur}
        onSubmit={onSubmit}
        onMouseLeave={onBlur}
        className={classnames('pa1 br2', {
          'bg-grey-100': isFocus
        })}
        style={{flexGrow: 0}}>
        <IconSearch className='grey-400' />
        <input
          ref={onInputMount}
          style={{width: '118px', fontSize: '.875rem'}}
          placeholder={`Search for ${getPlaceholder(attributeName)}`}
          className={classnames(
            'inline-list__searchbox border-0 outline-0 pointer lighter',
            {
              'grey-700 bg-grey-100': isFocus,
              'grey-400': !isFocus
            }
          )}
          type='search'
          onInput={e => searchForItems(e.target.value)}
          autoComplete='off'
          autoCorrect='off'
          autoCapitalize='off'
          spellCheck='false'
        />
      </form>
    )
  },

  render () {
    const {renderItem, renderShowMore, renderSearchBox, getLimit, props} = this
    const {attributeName, items, isFromSearch} = props

    if (!items.length && !isFromSearch) return null

    const slicedItems = items.slice(0, getLimit())

    return (
      <article data-app='facet' data-facet={attributeName} className='mb1 pa3'>
        <header className='flex justify-between items-start pb3'>
          <h3
            style={{flexGrow: 1, lineHeight: '26px'}}
            className='f6 ttu tracked blue-300 ma0'>
            {attributeName}
          </h3>
          {renderSearchBox()}
        </header>

        {slicedItems &&
          <ul className='pa0 ma0'>{slicedItems.map(renderItem)}</ul>}
        {renderShowMore()}
      </article>
    )
  }
})

export default connectRefinementList(RefinementList)
