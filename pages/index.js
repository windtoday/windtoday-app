import { findResultsState } from 'components/Instantsearch'
import Layout from 'components/Layout'
import PropTypes from 'prop-types'
import { Component } from 'react'
import { Provider } from 'rebass'
import App from 'components/App'
import Router from 'next/router'
import theme from 'config/theme'
import { debounce, omit } from 'lodash'
import qs from 'qs'

const updateAfter = 700

const createURL = state => `?${qs.stringify(state)}`

const searchStateToUrl = searchState =>
  searchState ? `${window.location.pathname}?${qs.stringify(searchState)}` : ''

export default class extends Component {
  static propTypes = {
    resultsState: PropTypes.object,
    searchState: PropTypes.object
  }

  static async getInitialProps ({ req, asPath, url, ...props }) {
    const searchState = asPath.includes('?')
      ? qs.parse(asPath.substring(asPath.indexOf('?') + 1))
      : {}
    const resultsState = await findResultsState(App, { searchState })
    const isServer = !!req
    return { resultsState, searchState, isServer, url }
  }

  onSearchStateChange = searchState => {
    const withoutPage = omit(searchState, 'page')
    clearTimeout(this.debouncedSetState)

    this.debouncedSetState = setTimeout(() => {
      const href = searchStateToUrl(withoutPage)
      Router.push(href, href, { shallow: true })
    }, updateAfter)

    this.setState({ searchState })
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
