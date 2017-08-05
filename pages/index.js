import { findResultsState } from 'components/Instantsearch'
import Layout from 'components/Layout'
import PropTypes from 'prop-types'
import App from 'components/App'
import Router from 'next/router'
import React from 'react'
import qs from 'qs'
import { Provider } from 'rebass'
import theme from 'config/theme'

const updateAfter = 700

const createURL = state => `?${qs.stringify(state)}`

const searchStateToUrl = searchState =>
  searchState ? `${window.location.pathname}?${qs.stringify(searchState)}` : ''

export default class extends React.Component {
  static propTypes = {
    resultsState: PropTypes.object,
    searchState: PropTypes.object
  }

  static async getInitialProps (params) {
    const { req, asPath, url } = params
    const searchState = asPath.includes('?')
      ? qs.parse(asPath.substring(asPath.indexOf('?') + 1))
      : {}
    const resultsState = await findResultsState(App, { searchState })
    const isServer = !!req
    return { resultsState, searchState, isServer, url }
  }

  onSearchStateChange = searchState => {
    clearTimeout(this.debouncedSetState)
    this.debouncedSetState = setTimeout(() => {
      const href = searchStateToUrl(searchState)
      Router.push(href, href, {
        shallow: true
      })
    }, updateAfter)
    this.setState({ searchState })
  }

  componentDidMount () {
    this.setState({ searchState: qs.parse(window.location.search.slice(1)) })
  }

  componentWillReceiveProps () {
    this.setState({ searchState: qs.parse(window.location.search.slice(1)) })
  }

  render () {
    const searchState =
      this.state && this.state.searchState
        ? this.state.searchState
        : this.props.searchState

    return (
      <Layout>
        <Provider theme={theme}>
          <App
            resultsState={this.props.resultsState}
            onSearchStateChange={this.onSearchStateChange}
            searchState={searchState}
            createURL={createURL}
            url={this.props.url}
            isServer={this.props.isServer}
          />
        </Provider>
      </Layout>
    )
  }
}
