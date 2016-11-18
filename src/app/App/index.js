import React, {createClass} from 'react'
import {InstantSearch} from 'react-instantsearch/dom'

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

const App = createClass({
  getInitialState: function () {
    const device = getDeviceState()
    return Object.assign({}, device, {
      facetsOpen: device.isDesktop
    })
  },

  toggle: function (key) {
    return (e) => {
      const val = !this.state[key]
      return this.setState({ [key]: val })
    }
  },

  get: function (key) {
    return this.state[key]
  },

  handleResize: function (e) {
    this.setState(getDeviceState())
  },

  componentDidMount: function () {
    window.addEventListener('resize', this.handleResize)
  },

  componentWillUnmount: function () {
    window.removeEventListener('resize', this.handleResize)
  },

  render: function () {
    return (
      <InstantSearch className='cf'
        appId='PDZK7H6PD0'
        apiKey='911167d1e62d76e16e9cd746c0b1a684'
        indexName='primary'
      >
        <Layout toggle={this.toggle} get={this.get} />
      </ InstantSearch>
    )
  }
})

export default App
