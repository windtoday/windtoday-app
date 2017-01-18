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
    const isFocus = this.state.focus

    const iconStyle = 'SearchBox__icon absolute f4'

    const {props, onInputMount, onChange, onFocus, onBlur, onClear} = this
    const {currentRefinement} = props

    const iconSearchStyle = classnames(iconStyle, 'SearchBox__iconSearch ph3-l ph2 ml2-ns mr2-ns', {
      'SearchBox__iconSearch--focus': isFocus,
      'SearchBox__iconSearch--blur': !isFocus
    })
    const iconClearStyle = classnames(iconStyle, 'SearchBox__iconClear nl4 pointer hover-blue moon-gray', {
      'SearchBox__iconClear--active': currentRefinement
    })

    return (
      <div data-app='searchbox' className='SearchBox relative w-80 w-70-l pa2'>
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
