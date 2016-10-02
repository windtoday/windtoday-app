import React, { Component } from 'react'
import {InstantSearch} from 'react-instantsearch'

import Layout from '../Layout'

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

export default class App extends Component {
  render () {
    return (
      <InstantSearch className='cf' appId='latency' apiKey='6be0576ff61c053d5f9a3225e2a90f76' indexName='ikea'>
        <Layout />
      </ InstantSearch>
    )
  }
}
