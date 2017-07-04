import {connectSearchBox} from 'react-instantsearch/connectors'
import IconSearch from '../Icon/search'
import IconClose from '../Icon/close'
import createClass from 'create-react-class'
import classnames from 'classnames'
import React from 'react'

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
    const {currentRefinement, className, style, get} = props

    const iconSearchStyle = classnames(
      iconStyle,
      'searchbox__icon-search',
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
    const isMobile = get('isMobile')

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
          className='searchbox__input white border-0 outline-0 w-100 input-reset bg-black-10 pv2 lh-solid br2 fw3 f5 helvetica'
          type='search'
          value={currentRefinement}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={isMobile ? 'sails, boards,...' : 'What do you want to find?'}
          autoComplete='off'
          autoCorrect='off'
          autoCapitalize='off'
          spellCheck='false'
          autoFocus
        />
        <IconClose onClick={onSearchClear} className={iconSearchClearStyle} />
      </form>
    )
  }
})

export default connectSearchBox(CustomSearchBox)
