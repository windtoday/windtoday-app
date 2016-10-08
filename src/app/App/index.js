import React, { Component } from 'react'
import {InstantSearch} from 'react-instantsearch'

import Layout from '../Layout'

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

class App extends Component {
  render () {
    return (
      <InstantSearch className='cf'
        appId='PDZK7H6PD0'
        apiKey='911167d1e62d76e16e9cd746c0b1a684'
        indexName='sails'
      >
        <Layout />
      </ InstantSearch>
    )
  }
}

export default App
