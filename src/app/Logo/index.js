import classnames from 'classnames'
import React, {createClass} from 'react'
import './style.scss'

import {connectCurrentRefinements, connectSearchBox} from 'react-instantsearch/connectors'

const getStyle = (isDesktop) => isDesktop ? 'logo--big' : 'logo--tiny'
const getImage = (isDesktop) => isDesktop ? 'logo' : 'logo-tiny'

function LogoWrapper (props) {
  const {refine, items, children, className} = props
  return (
    <a
      className={`pointer ${className}`}
      onClick={refine.bind(null, items)}
      >{children}</a>
  )
}

const ConnectedLogoWrapper = connectCurrentRefinements(LogoWrapper)

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
    const {get, className, refine} = props
    const isDesktop = get('isDesktop')
    const image = getImage(isDesktop)
    const style = classnames('logo', getStyle(isDesktop), 'mh0-ns ma2', {
      'logo--shake': clicked
    })

    const onClick = (evt) => {
      clickedAnimation()
      refine('')
      evt.stopPropagation()
    }

    return (
      <ConnectedLogoWrapper className={className}>
        <img
          ref='img'
          className={style} onClick={onClick}
          alt='windtoday'
          src={`/assets/img/${image}.png`} />
      </ConnectedLogoWrapper>
    )
  }
})

export default connectSearchBox(Logo)
