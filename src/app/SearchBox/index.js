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
    const iconStyle = 'SearchBox__icon absolute f4 moon-gray'
    const {props, onInputMount, onChange, onFocus, onBlur, onClear, state} = this
    const {focus: isFocus} = state
    const {currentRefinement, className} = props

    const iconSearchStyle = classnames(iconStyle, 'SearchBox__iconSearch ph3-l ph2 ml2-ns mr2-ns', {
      'SearchBox__iconSearch__focus blue': isFocus,
      'SearchBox__iconSearch__blur': !isFocus
    })

    const iconClearStyle = classnames(iconStyle, 'SearchBox__iconClear nl4 pointer hover-blue', {
      'SearchBox__iconClear__focus': currentRefinement,
      'SearchBox__iconClear__blur': !currentRefinement
    })

    const boxStyle = classnames('SearchBox relative w-80 w-70-l pa2', className)

    return (
      <div data-app='searchbox' className={boxStyle}>
        <IconSearch
          className={iconSearchStyle}
        />
        <input
          ref={onInputMount}
          className='SearchBox__input w-100 input-reset bg-white ph4 ph5-ns pv2 lh-solid input-reset'
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
