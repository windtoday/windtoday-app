import {connectSearchBox} from 'react-instantsearch/connectors'
import IconSearch from 'react-icons/lib/md/search'
import IconClear from 'react-icons/lib/md/clear'
import React, {createClass} from 'react'
import classnames from 'classnames'

import './style.scss'

const CustomSearchBox = createClass({
  getInitialState () {
    return { focus: false }
  },

  onInputMount (input) {
    this.input = input
  },

  onChange (e) {
    this.props.refine(e.target.value)
  },

  onClear () {
    this.props.refine('')
    this.input.focus()
  },

  onFocus (e) {
    this.setState({focus: true})
  },

  onBlur (e) {
    this.setState({focus: false})
  },

  render () {
    const iconStyle = 'searchbox__icon absolute f4'
    const {props, onInputMount, onChange, onFocus, onBlur, onClear, state} = this
    const {focus: isFocus} = state
    const {currentRefinement, className} = props

    const iconSearchStyle = classnames(iconStyle, 'searchbox__icon-search ph3-l ph2 ml2-ns ml1 mr2-ns', {
      'searchbox__icon-search--focus': isFocus,
      'searchbox__icon-search--blur': !isFocus
    })

    const iconClearStyle = classnames(iconStyle, 'searchbox__icon-clear nl4 pointer', {
      'searchbox__icon-clear--active': currentRefinement
    })

    const boxStyle = classnames('searchbox relative w-80 w-70-l pa2-ns pt2 pb2 pl2', className)

    return (
      <div data-app='searchbox' className={boxStyle}>
        <IconSearch
          className={iconSearchStyle}
        />
        <input
          ref={onInputMount}
          className='searchbox__input w-100 input-reset bg-black-10 ph5-ns pv2 lh-solid'
          type='search'
          results={5}
          value={currentRefinement}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          autoSave='searchbox'
          name='s'
          placeholder='brand, model, size,...'
          autoFocus
        />
        <IconClear
          onClick={onClear}
          className={iconClearStyle}
        />
      </div>
    )
  }
})

export default connectSearchBox(CustomSearchBox)
