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

    const iconStyle = 'searchbox-icon absolute f4'

    const {props, onInputMount, onChange, onFocus, onBlur, onClear} = this
    const {currentRefinement} = props

    const iconSearchStyle = classnames(iconStyle, 'searchbox-icon__search ph3-l ph2 ml2-ns mr2-ns', {
      'searchbox-icon__search-focus': isFocus,
      'searchbox-icon__search-blur': !isFocus
    })
    const iconClearStyle = classnames(iconStyle, 'searchbox-icon__clear nl4 pointer hover-blue light-gray', {
      'searchbox-icon__clear-active': currentRefinement
    })

    return (
      <div data-app='searchbox' className='w-80 w-70-l pa2'>
        <IconSearch
          className={iconSearchStyle}
        />
        <input
          ref={onInputMount}
          className='searchbox-input w-100 f6 f5-l input-reset black-80 bg-white ph4 ph5-ns pv2 lh-solid'
          type='search'
          results={5}
          value={currentRefinement}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          autoSave='searchbox'
          name='s'
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
