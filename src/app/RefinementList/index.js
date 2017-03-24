import IconExpandMore from 'react-icons/lib/md/expand-more'
import IconExpandLess from 'react-icons/lib/md/expand-less'
import React, {createClass} from 'react'
import classnames from 'classnames'
import Switch from 'rc-switch'
import {connectRefinementList} from 'react-instantsearch/connectors'
import './style.scss'

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

  isUpperCase () {
    const {attributeName} = this.props
    if (attributeName !== 'mast type') return false
    return true
  },

  renderItem (item, key) {
    const {isUpperCase} = this
    const onChange = () => this.props.refine(item.value)

    return (
      <section className='ph2' key={key}>
        <label
          className='pointer pb2'
          style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
            >

          <Switch
            className={classnames({
              'rc-switch-checked': item.isRefined
            })}
            onChange={onChange}
            checked={item.isRefined}
            />

          <div style={{flexGrow: '1'}}>
            <span
              onClick={onChange}
              className={
                classnames('link ph2 lh-title helvetica f5 fw5 dim ttc', {
                  'blue-grey-300': !item.isRefined,
                  'light-blue-500 fw8': item.isRefined,
                  'ttu': isUpperCase()
                })}>
              {item.label}
            </span>
            <span
              onClick={onChange}
              className={classnames('link fr fw4 dim', {
                'blue-grey-200': !item.isRefined,
                'light-blue-500 fw8': item.isRefined
              })}>
              {item.count}
            </span>
          </div>
        </label>
      </section>
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
        className='pointer link dim dib blue-grey-100 pt2'
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
        <header>
          <h3 className='f6 fw6 ttu tracked pb3 cyan-500 ma0 pa0'>{attributeName}</h3>
        </header>
        {slicedItems.map(renderItem)}
        {renderShowMore()}
      </article>
    )
  }
})

export default connectRefinementList(RefinementList)
