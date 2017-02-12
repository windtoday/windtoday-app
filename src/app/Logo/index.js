import classnames from 'classnames'
import React, {createClass} from 'react'
import {connectCurrentRefinements} from 'react-instantsearch/connectors'

import './style.scss'
import ClearAll from './ClearAll'

const getStyle = (isDesktop) => isDesktop ? 'logo--big' : 'logo--tiny'
const getImage = (isDesktop) => isDesktop ? 'logo' : 'logo-tiny'

const Logo = createClass({
  getInitialState () {
    return {clicked: false}
  },
  componentDidMount () {
    const elm = this.refs.img
    elm.addEventListener('clickedAnimation', this.clickedDone)
  },
  componentWillUnmount () {
    const elm = this.refs.img
    elm.removeEventListener('clickedAnimation', this.clickedDone)
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
    const {query, items, get, className} = props

    const isDesktop = get('isDesktop')
    const image = getImage(isDesktop)
    const style = classnames('logo', getStyle(isDesktop), {
      'logo--shake': clicked
    })

    const onClick = (evt) => {
      const isDisabled = items.length === 0 && (!query || query === '')
      !isDisabled && clickedAnimation()
    }

    return (
      <ClearAll className={`pointer ${className}`} clearsQuery>
        <img
          ref='img'
          className={style} onClick={onClick}
          alt='windtoday'
          src={`/assets/img/${image}.png`} />
      </ClearAll>
    )
  }
})

export default connectCurrentRefinements(Logo)
