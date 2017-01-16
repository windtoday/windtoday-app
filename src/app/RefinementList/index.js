import React, {createClass} from 'react'
import classnames from 'classnames'
import Switch from 'rc-switch'
import {connectRefinementList} from 'react-instantsearch/connectors'
import './style.scss'

const RefinementList = createClass({
  getInitialState () {
    return { extended: false }
  },

  renderItem (item, key) {
    const onChange = () => this.props.refine(item.value)

    return (
      <section className='ais-RefinementList__root' key={key}>
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
                      classnames('ais-RefinementList__span link ph2 ttc lh-title helvetica f5 fw5 hover-light-blue', {
                        'light-silver': !item.isRefined,
                        'light-blue fw8': item.isRefined
                      })}>
              {item.label}
            </span>
            {' '}
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
        className='pointer link dim dib light-blue pt2'
      >
        {extended ? '« less' : 'more »'}
      </a>
    )
  },

  render () {
    const {renderItem, renderShowMore, getLimit, props} = this
    const {title, items} = props

    if (!items.length) return null
    const slicedItems = items.slice(0, getLimit())

    return (
      <article data-app='facet' data-facet={title} className={`Facet-${title} ph3 ph4-l pb4`}>
        <header className='f6 fw6 ttu tracked pb3 green'>{title}</header>
        {slicedItems.map(renderItem)}
        {renderShowMore()}
      </article>
    )
  }
})

export default connectRefinementList(RefinementList)
