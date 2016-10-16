import React, { Component } from 'react'
import {InstantSearch} from 'react-instantsearch'

import Layout from '../Layout'

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

function getDevice () {
  if (window.innerWidth > 960) return 'desktop'
  return 'mobile'
}

function getDeviceState () {
  const device = getDevice()
  const isDesktop = device === 'desktop'

  return {
    isDesktop: isDesktop,
    isMobile: !isDesktop
  }
}

class App extends Component {

  constructor () {
    super()

    const device = getDeviceState()

    this.state = Object.assign({}, device, {
      facetsOpen: device.isDesktop
    })

    this.toggle = this.toggle.bind(this)
    this.get = this.get.bind(this)
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize.bind(this))
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize.bind(this))
  }

  toggle (key) {
    return (e) => {
      const val = !this.state[key]
      this.setState({ [key]: val })
    }
  }

  get (key) {
    return this.state[key]
  }

  handleResize (e) {
    this.setState(getDeviceState())
  }

  render () {
    return (
      <InstantSearch className='cf'
        appId='PDZK7H6PD0'
        apiKey='911167d1e62d76e16e9cd746c0b1a684'
        indexName='sails'
      >
        <Layout toggle={this.toggle} get={this.get} />
      </ InstantSearch>
    )
  }
}

export default App
