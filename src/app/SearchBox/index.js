import {connectSearchBox} from 'react-instantsearch/connectors'
import IconSearch from 'react-icons/lib/md/search'
import IconSearchClear from 'react-icons/lib/md/clear'
import React, {createClass} from 'react'
import classnames from 'classnames'

import './style.scss'

const CustomSearchBox = createClass({
  getInitialState () {
    return {focus: false}
  },

  onChange (e) {
    const value = e.target.value
    this.props.refine(value)
  },

  onSearchClear () {
    this.props.refine('')
    this.input.focus()
  },

  onFocus (e) {
    this.setState({focus: true})
  },

  onBlur (e) {
    this.setState({focus: false})
  },

  onSubmit (e) {
    e.preventDefault()
    e.stopPropagation()
    this.input.blur()
    return false
  },

  render () {
    const iconStyle = 'searchbox__icon absolute f3'
    const {
      props,
      onChange,
      onFocus,
      onBlur,
      onSearchClear,
      onSubmit,
      state
    } = this
    const {focus: isFocus} = state
    const {currentRefinement, className, style} = props

    const iconSearchStyle = classnames(
      iconStyle,
      'searchbox__icon-search ph3-l ph2 ml2-ns ml1 mr2-ns',
      {
        'searchbox__icon-search--focus': isFocus,
        'searchbox__icon-search--blur': !isFocus
      }
    )

    const iconSearchClearStyle = classnames(
      iconStyle,
      'searchbox__icon-clear nl4 pointer',
      {
        'searchbox__icon-clear--active': currentRefinement
      }
    )

    const boxStyle = classnames('searchbox relative w-80 w-70-l', className)

    return (
      <form
        noValidate
        data-app='searchbox'
        role='search'
        className={boxStyle}
        style={style}
        onSubmit={onSubmit}
        >
        <IconSearch className={iconSearchStyle} />
        <input
          ref={node => (this.input = node)}
          className='searchbox__input border-0 outline-0 w-100 input-reset bg-black-10 ph5-ns pv2 lh-solid br2 fw3'
          type='search'
          value={currentRefinement}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder='What you want to find?'
          autoComplete='off'
          autoCorrect='off'
          autoCapitalize='off'
          spellCheck='false'
          autoFocus
        />
        <IconSearchClear onClick={onSearchClear} className={iconSearchClearStyle} />
      </form>
    )
  }
})

export default connectSearchBox(CustomSearchBox)
