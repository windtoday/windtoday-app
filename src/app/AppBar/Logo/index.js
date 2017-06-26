import {connectCurrentRefinements} from 'react-instantsearch/connectors'
import createClass from 'create-react-class'
import classnames from 'classnames'
import React from 'react'

import './style.scss'
import ClearAll from './ClearAll'
import IconWindtoday from '../../Icon/windtoday'

const Logo = createClass({
  getInitialState () {
    return {clicked: false}
  },
  componentDidMount () {
    this.logo.addEventListener('clickedAnimation', this.clickedDone)
  },
  componentWillUnmount () {
    this.logo.removeEventListener('clickedAnimation', this.clickedDone)
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
      <ClearAll {...props} className={clearStyle} clearsQuery>
        <div ref={node => (this.logo = node)}
          onClick={onClick}>
          <IconWindtoday height='64' className={style} />
        </div>
      </ClearAll>
    )
  }
})

export default connectCurrentRefinements(Logo)
