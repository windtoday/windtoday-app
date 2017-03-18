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
    const {isCapitalize, isUpperCase} = this
    const onChange = () => this.props.refine(item.value)

    return (
      <section className='ais-RefinementList__root ph2' key={key}>
        <label
          className={classnames('pointer pb2', {
            'ais-RefinementList__itemSelected': item.isRefined
          })}
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

          <div
            className='ais-RefinementList__wrapper'
            style={{
              flexGrow: '1'
            }}
              >
            <span
              onClick={onChange}
              className={
                      classnames('ais-RefinementList__span link ph2 lh-title helvetica f5 fw5 hover-light-blue', {
                        'light-silver': !item.isRefined,
                        'light-blue fw8': item.isRefined,
                        'ttc': isCapitalize(),
                        'ttu': isUpperCase()
                      })}>
              {item.label}
            </span>
            <span
              onClick={onChange}
              className={classnames('ais-RefinementList__span link fr fw4 hover-light-blue', {
                'moon-gray': !item.isRefined,
                'light-blue fw8': item.isRefined
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
        className='pointer link dim dib moon-gray pt2'
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
      <article data-app='facet' data-facet={attributeName} className='mb1 bg-white pa3'>
        <header className='f6 fw6 ttu tracked pb3 green'>{attributeName}</header>
        {slicedItems.map(renderItem)}
        {renderShowMore()}
      </article>
    )
  }
})

export default connectRefinementList(RefinementList)
