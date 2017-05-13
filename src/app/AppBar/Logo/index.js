import classnames from 'classnames'
import React, {createClass} from 'react'
import {connectCurrentRefinements} from 'react-instantsearch/connectors'

import './style.scss'
import ClearAll from './ClearAll'
import IconWindtoday from '../../Icon/windtoday'

const Logo = createClass({
  getInitialState () {
    return {clicked: false}
  },
  componentDidMount () {
    const el = this.refs.logo
    el.addEventListener('clickedAnimation', this.clickedDone)
  },
  componentWillUnmount () {
    const el = this.refs.logo
    el.removeEventListener('clickedAnimation', this.clickedDone)
  },
  clickedDone () {
    this.setState({clicked: false})
  },
  clickedAnimation () {
    this.setState({clicked: true})
    setTimeout(this.clickedDone, 150)
  },
  render () {
    const {props, state, clickedAnimation} = this
    const {clicked} = state
    const {query, items, className} = props

    const style = classnames('appbar__logo', {
      'appbar__logo--shake': clicked
    })

    const clearStyle = classnames('pointer changelog relative', className)

    const onClick = (evt) => {
      const isDisabled = items.length === 0 && (!query || query === '')
      !isDisabled && clickedAnimation()
    }

    return (
      <ClearAll className={clearStyle} clearsQuery>
        <div ref='logo' onClick={onClick}>
          <IconWindtoday className={style} />
        </div>
      </ClearAll>
    )
  }
})

export default connectCurrentRefinements(Logo)
