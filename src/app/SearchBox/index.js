import {connectSearchBox} from 'react-instantsearch/connectors'
import IconSearch from 'react-icons/lib/md/search'
import React, {createClass} from 'react'
import classnames from 'classnames'

import './style.scss'

const CustomSearchBox = createClass({
  getInitialState: function () {
    return { focus: false }
  },

  onChange: function (e) {
    this.props.refine(e.target.value)
  },

  onFocus: function (e) {
    this.setState({focus: true})
  },

  onBlur: function (e) {
    this.setState({focus: false})
  },

  render: function () {
    const isFocus = this.state.focus
    const theme = 'absolute ph3-l ph2 mh2-l f4'

    const style = classnames(theme, {
      'focus': isFocus,
      'blur': !isFocus
    })

    const {props, onChange, onFocus, onBlur} = this
    const {query} = props

    return (
      <div data-app='searchbox' className='w-80 w-70-l pa2'>
        <IconSearch className={style} />
        <input
          className='w-100 f6 f5-l input-reset black-80 bg-white pt2 pr2 pb2 lh-solid br2 ba pl5-l pl4'
          type='search'
          results={5}
          value={query}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          autoSave='searchbox'
          autoFocus
        />
      </div>
    )
  }
})

export default connectSearchBox(CustomSearchBox)
