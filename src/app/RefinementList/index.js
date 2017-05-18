import React, {createClass} from 'react'
import classnames from 'classnames'
import Switch from 'rc-switch'
import {connectRefinementList} from 'react-instantsearch/connectors'
import './style.scss'

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
                classnames('link ph2 lh-title f5 hover-blue-500 ttc', {
                  'blue-grey-300': !item.isRefined,
                  'blue-500': item.isRefined,
                  'ttu': isUpperCase()
                })}>
              {item.label}
            </span>
            <span
              onClick={onChange}
              className={classnames('link fr hover-blue-500', {
                'blue-grey-300': !item.isRefined,
                'blue-500': item.isRefined
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

  render () {
    const {renderItem, getLimit, props} = this
    const {attributeName, items} = props

    if (!items.length) return null
    const slicedItems = items.slice(0, getLimit())

    return (
      <article data-app='facet' data-facet={attributeName} className='mb1 pa3'>
        <header>
          <h3 className='f6 ttu tracked pb3 blue-300 ma0'>{attributeName}</h3>
        </header>
        {slicedItems.map(renderItem)}
      </article>
    )
  }
})

export default connectRefinementList(RefinementList)
