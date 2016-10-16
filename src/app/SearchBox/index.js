import React, { Component } from 'react'
import classnames from 'classnames'
import {SearchBox} from 'react-instantsearch'
import IconSearch from 'react-icons/lib/md/search'

import './style.scss'

class CustomSearchBox extends Component {

  constructor (props) {
    super(props)
    this.state = {
      focus: false
    }
    this.onChange = this.onChange.bind(this)
    this.onFocus = this.onFocus.bind(this)
    this.onBlur = this.onBlur.bind(this)
  }

  onChange (e) {
    this.props.refine(e.target.value)
  }

  onFocus (e) {
    this.setState({focus: true})
  }

  onBlur (e) {
    this.setState({focus: false})
  }

  render () {
    const isFocus = this.state.focus
    const theme = 'absolute ph4 f4'

    const style = classnames(theme, {
      'focus': isFocus,
      'blur': !isFocus
    })

    return (
      <div data-app='searchbox' className='w-80 w-70-l pa2'>
        <IconSearch
          className={style}
        />
        <input
          className='w-100 f6 f5-l input-reset black-80 bg-white pt2 pr2 pb2 lh-solid br2 ba'
          type='text'
          value={this.props.query}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          autoFocus
        />
      </div>
    )
  }

}

export default SearchBox.connect(CustomSearchBox)
