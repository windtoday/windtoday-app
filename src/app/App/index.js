import React, { Component } from 'react'
import {InstantSearch} from 'react-instantsearch'

import Layout from '../Layout'

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

const isDektop = window.innerWidth > 960

class App extends Component {

  constructor () {
    super()

    this.state = {
      facetsOpen: isDektop
    }
    this.toggle = this.toggle.bind(this)
    this.get = this.get.bind(this)
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
