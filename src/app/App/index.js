import {InstantSearch} from 'react-instantsearch/dom'
import createClass from 'create-react-class'
import React, {createElement} from 'react'
import PropTypes from 'prop-types'
import qs from 'qs'

import AppBar from '../AppBar'
import Search from '../Search'
import Home from '../Home'
import './style.scss'

const updateAfter = 700

const searchStateToUrl = (props, searchState) => {
  return searchState ? `${props.location.pathname}${createURL(searchState)}` : ''
}

const createURL = state => `?${qs.stringify(state)}`
const parseURL = location => qs.parse(location.search.slice(1))

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
    const device = getDeviceState()

    const sidebar = {
      searchFiltersLeftOpen: device.isDesktop,
      searchFiltersRightOpen: device.isDesktop
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

  componentWillReceiveProps (nextProps) {
    const {pathname: currentPathname} = this.props.location
    const {pathname: nextPathname} = nextProps.location

    if (currentPathname === '/search' && nextPathname === '/') {
      return this.setState({searchState: {}})
    }

    if (currentPathname === '/' && nextPathname === '/search') {
      return this.setState({searchState: parseURL(nextProps.location)})
    }
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
    clearTimeout(this.debouncedSetState)
    this.debouncedSetState = setTimeout(() => {
      this.props.history.push(searchStateToUrl(this.props, searchState), searchState)
    }, updateAfter)
    this.setState({searchState})
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
    const props = {toggle, get, set, isSearching, ...this.props}

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
