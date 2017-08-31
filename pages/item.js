/* global APP */

import algoliasearch from 'algoliasearch/lite'
import Layout from 'components/Layout'
import { Component } from 'react'
import { Provider } from 'rebass'
import App from 'components/App'
import theme from 'config/theme'

const algoliaClient = algoliasearch(APP.algolia.appId, APP.algolia.apiKey)
const algoliaIndex = algoliaClient.initIndex(APP.algolia.indexName)

export default class extends Component {
  static async getInitialProps ({ req, asPath, url, ...props }) {
    const isServer = !!req

    const { query: { id: objectID } } = props

    let item

    if (isServer) {
      item = Object.assign(await algoliaIndex.getObject(objectID), {
        isFetched: true
      })
    } else {
      item = Object.assign(JSON.parse(window.sessionStorage.getItem('hit')), {
        isFetched: false
      })
    }

    const layout = {
      url: item.link,
      title: `${item.title} | Windtoday`,
      ogImage: item.image,
      description: `See all the information related with ${item.brand} ${item.model}. Compare with the rest of brands, search the best price and choose real deals in our windsurfing marketplace.`
    }

    return { isServer, url, layout, item }
  }

  render () {
    return (
      <Layout {...this.props.layout}>
        <Provider theme={theme}>
          <App item={this.props.item} isServer={this.props.isServer} />
        </Provider>
      </Layout>
    )
  }
}
