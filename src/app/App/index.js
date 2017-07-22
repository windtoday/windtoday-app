/* global ALGOLIA */

import {InstantSearch} from 'react-instantsearch/dom'
import createClass from 'create-react-class'
import React, {createElement} from 'react'
import PropTypes from 'prop-types'
import qs from 'qs'

import AppBar from '../AppBar'
import Search from '../Search'
import Home from '../Home'
import './style.scss'

const App = createClass({
  propTypes: {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  },
  getInitialState () {
    const {getDeviceState, parseURL} = this
    const device = getDeviceState()

    const sidebar = {
      searchFiltersLeftOpen: false,
      searchFiltersRightOpen: false
    }

    const searchState = parseURL(this.props.location)
    const onSearchClear = () => {}

    return {
      ...device,
      ...sidebar,
      searchState,
      onSearchClear,
      hitsPerPage: 21
    }
  },

  parseURL (location) {
    return qs.parse(location.search.slice(1))
  },

  getDeviceState () {
    const device = this.getDevice()
    const isDesktop = device === 'desktop'

    return {
      isDesktop,
      isMobile: !isDesktop
    }
  },

  componentWillReceiveProps (nextProps) {
    const {pathname: currentPathname} = this.props.location
    const {pathname: nextPathname} = nextProps.location
    const {parseURL} = this

    if (currentPathname === '/search' && nextPathname === '/') {
      return this.setState({searchState: {}})
    }

    if (currentPathname === '/' && nextPathname === '/search') {
      return this.setState({searchState: parseURL(nextProps.location)})
    }
  },

  getDevice () {
    return window.innerWidth > 960 ? 'desktop' : 'mobile'
  },

  createURL (state) {
    return `?${qs.stringify(state)}`
  },

  searchStateToUrl (props, searchState) {
    const {createURL} = this
    const {pathname} = props.location

    return searchState
      ? `${pathname}${createURL(searchState)}`
      : ''
  },

  toggle (key) {
    return e => {
      const val = !this.state[key]
      return this.setState({[key]: val})
    }
  },

  set (key, value) {
    this.setState({[key]: value})
  },

  get (key) {
    return this.state[key]
  },

  onSearchStateChange (searchState) {
    const {searchStateToUrl} = this
    const url = searchStateToUrl(this.props, searchState)

    this.setState({searchState})
    this.props.history.push(url, searchState)
  },

  isSearching () {
    const {pathname} = this.props.location
    if (pathname === '/search') return true
    const {query = ''} = this.state.searchState
    return query !== ''
  },

  render () {
    const {toggle, get, onSearchStateChange, createURL, state, set, isSearching} = this
    const {searchState} = state

    const props = {
      toggle,
      createURL,
      get,
      set,
      isSearching,
      ...this.props
    }

    return (
      <InstantSearch
        appId={ALGOLIA.appId}
        apiKey={ALGOLIA.apiKey}
        indexName={ALGOLIA.indexName}
        searchState={searchState}
        onSearchStateChange={onSearchStateChange}
        createURL={createURL}>
        <AppBar {...props} />
        {createElement(isSearching() ? Search : Home, props)}
      </InstantSearch>
    )
  }
})

export default App
