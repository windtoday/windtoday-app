import React, {createClass, createElement, PropTypes} from 'react'
import {InstantSearch} from 'react-instantsearch/dom'
import qs from 'qs'

import AppBar from '../AppBar'
import Search from '../Search'
import Home from '../Home'
import './style.scss'

const updateAfter = 700

const searchStateToUrl = (props, searchState) =>
  searchState ? `${props.location.pathname}${createURL(searchState)}` : ''

const createURL = state => `?${qs.stringify(state)}`

function getDevice () {
  if (window.innerWidth > 960) return 'desktop'
  return 'mobile'
}

function getDeviceState () {
  const device = getDevice()
  const isDesktop = device === 'desktop'

  return {
    isDesktop,
    isMobile: !isDesktop
  }
}

const App = createClass({
  propTypes: {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  },
  getInitialState () {
    const {isSearching} = this
    const device = getDeviceState()

    const sidebar = {
      searchFiltersLeftOpen: device.isDesktop,
      searchFiltersRightOpen: device.isDesktop
    }

    const searchState = qs.parse(this.props.location.search.slice(1))

    const onSearchClear = () => {}

    return {
      ...device,
      ...sidebar,
      searchState,
      isSearching,
      onSearchClear
    }
  },

  toggle (key) {
    return e => {
      const val = !this.state[key]
      return this.setState({[key]: val})
    }
  },

  set (key, value) {
    this.state[key] = value
  },

  get (key) {
    return this.state[key]
  },

  onSearchStateChange (searchState) {
    clearTimeout(this.debouncedSetState)
    this.debouncedSetState = setTimeout(() => {
      this.props.history.push(searchStateToUrl(this.props, searchState), searchState)
    }, updateAfter)
    this.setState({searchState})
  },

  isSearching () {
    const {query, page} = this.state.searchState
    if (Object.keys(this.state.searchState) > 2) return true
    if (!query || (query === '' && page === 1)) return false
    return true
  },

  render () {
    const {toggle, get, onSearchStateChange, createURL, state, set} = this
    const {searchState, isSearching} = state
    const props = {toggle, get, set}

    return (
      <InstantSearch
        appId='PDZK7H6PD0'
        apiKey='911167d1e62d76e16e9cd746c0b1a684'
        indexName='windsurf'
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
