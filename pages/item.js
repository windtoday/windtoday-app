/* global APP */

import { findResultsState } from 'components/Instantsearch'
import algoliasearch from 'algoliasearch/lite'
import Layout from 'components/Layout'
import PropTypes from 'prop-types'
import { Component } from 'react'
import { Provider } from 'rebass'
import App from 'components/App'
import Router from 'next/router'
import theme from 'config/theme'
import qs from 'qs'

const updateAfter = 700

const createURL = state => `?${qs.stringify(state)}`

const searchStateToUrl = searchState =>
  searchState ? `${window.location.pathname}?${qs.stringify(searchState)}` : ''

const algoliaClient = algoliasearch(APP.algolia.appId, APP.algolia.apiKey)
const algoliaIndex = algoliaClient.initIndex(APP.algolia.indexName)

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

    const { query: { id: currentItem } } = props
    const item = await algoliaIndex.getObject(currentItem)

    const layout = {
      url: item.link,
      title: `${item.title} | Windtoday`,
      ogImage: item.image,
      description: `See all the information related with ${item.brand} ${item.model}. Compare with the rest of brands, search the best price and choose real deals in our windsurfing marketplace.`
    }

    return { resultsState, searchState, isServer, url, currentItem, layout }
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
      <Layout {...this.props.layout}>
        <Provider theme={theme}>
          <App
            resultsState={this.props.resultsState}
            onSearchStateChange={this.onSearchStateChange}
            searchState={searchState}
            createURL={createURL}
            url={this.props.url}
            isServer={this.props.isServer}
            currentItem={this.props.currentItem}
          />
        </Provider>
      </Layout>
    )
  }
}
