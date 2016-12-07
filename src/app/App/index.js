import React, {createClass} from 'react'
import {InstantSearch} from 'react-instantsearch/dom'
import {withRouter} from 'react-router'
import qs from 'qs'
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
  getInitialState () {
    const device = getDeviceState()
    const sidebar = { facetsOpen: device.isDesktop }
    const searchState = {...qs.parse(this.props.router.location.query)}
    return {...device, ...sidebar, searchState}
  },

  componentWillReceiveProps () {
    this.setState({searchState: qs.parse(this.props.router.location.query)})
  },

  createURL (state) {
    return `?${qs.stringify(state)}`
  },

  toggle (key) {
    return (e) => {
      const val = !this.state[key]
      return this.setState({ [key]: val })
    }
  },

  get (key) {
    return this.state[key]
  },

  handleResize (e) {
    this.setState(getDeviceState())
  },

  componentDidMount () {
    window.addEventListener('resize', this.handleResize)
  },

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  },

  onSearchStateChange (nextSearchState) {
    const THRESHOLD = 700
    const newPush = perfomance.now()
    this.setState({lastPush: newPush, searchState: nextSearchState})

    if (this.state.lastPush && newPush - this.state.lastPush <= THRESHOLD) {
      this.props.router.replace(nextSearchState ? `?${qs.stringify(nextSearchState)}` : '')
    } else {
      this.props.router.push(nextSearchState ? `?${qs.stringify(nextSearchState)}` : '')
    }
  },

  render () {
    const {toggle, get, onSearchStateChange, createURL, state} = this
    const props = {toggle, get}

    return (
      <InstantSearch className='cf'
        appId='PDZK7H6PD0'
        apiKey='911167d1e62d76e16e9cd746c0b1a684'
        indexName='primary'
        searchState={state.searchState}
        onSearchStateChange={onSearchStateChange}
        createURL={createURL}
      >
        <Layout {...props} />
      </ InstantSearch>
    )
  }
})

export default withRouter(App)
