import React, {createClass, PropTypes} from 'react'
import classnames from 'classnames'

import {connectRefinementList} from 'react-instantsearch/connectors'

import './style.scss'

const RefinementList = createClass({
  propTypes: {
    applyTheme: PropTypes.func.isRequired,
    translate: PropTypes.func.isRequired,
    refine: PropTypes.func.isRequired,
    createURL: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.arrayOf(PropTypes.string).isRequired,
      count: PropTypes.number.isRequired,
      isRefined: PropTypes.bool.isRequired
    })),
    showMore: PropTypes.bool,
    limitMin: PropTypes.number,
    limitMax: PropTypes.number
  },

  renderItem: function (item, key) {
    return (
      <section className='ais-RefinementList__root' key={key}>
        <div className='mb2'>
          <label
            className={classnames('pointer', {
              'ais-RefinementList__itemSelected': item.isRefined
            })}
            >
            <input
              type='checkbox'
              className={classnames('ais-RefinementList__itemCheckbox', {
                'ais-RefinementList__itemCheckboxSelected': item.isRefined
              })}
              checked={item.isRefined}
              onChange={() => this.props.refine(item.value)
              }
            />
            <span
              className={classnames('ais-RefinementList__span ph2 ttc lh-title f5 fw5 hover-blue', {
                'silver': !item.isRefined,
                'blue fw8': item.isRefined
              })}>
              {item.label}
            </span>
            {' '}
            <span className={classnames('fr fw4 hover-blue', {
              'light-gray': !item.isRefined,
              'blue fw8': item.isRefined
            })}>
              {item.count}
            </span>
          </label>
        </div>
      </section>
    )
  },

  render: function () {
    const { renderItem } = this
    const {title, items} = this.props

    return (
      <article data-app='facet' data-facet={title} className='ph3 ph4-ns pb4'>
        <header className='f6 fw6 ttu tracked pb3 gray'>{title}</header>
        {items.map(renderItem)}
      </article>
    )
  }
})

export default connectRefinementList(RefinementList)
