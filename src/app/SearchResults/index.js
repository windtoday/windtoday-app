import {createElement, createClass} from 'react'
import {createConnector} from 'react-instantsearch'

import Results from './results'
import Loader from './loader'

const connectSearchResults = createConnector({
  displayName: 'SearchResults',
  getProvidedProps (props, searchState, searchResults) {
    const {searching} = searchResults
    return {searching}
  }
})

const SearchResults = createClass({
  getInitialState () {
    return {loading: true, ready: false}
  },

  componentWillReceiveProps () {
    const {searching} = this.props
    const {ready} = this.state
    if (searching && !ready) this.setState({loading: false, ready: true})
  },

  render () {
    const {loading} = this.state
    const {toggle, get, set} = this.props
    const props = {toggle, get, set}
    const childComponent = loading ? Loader : Results

    return createElement(childComponent, props)
  }
})

export default connectSearchResults(SearchResults)
