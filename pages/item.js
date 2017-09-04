/* global APP */

import algoliasearch from 'algoliasearch/lite'
import Layout from 'components/Layout'
import { Component } from 'react'
import { Provider } from 'rebass'
import App from 'components/App'
import theme from 'config/theme'

const algoliaClient = algoliasearch(APP.algolia.appId, APP.algolia.apiKey)
const algoliaIndex = algoliaClient.initIndex(APP.algolia.indexName)

const getFallbackDescription = ({ brand, model }) => `
See all the information related with ${brand} ${model}. Compare with the rest of brands, search the best price and choose real deals in our windsurfing marketplace.
`

export default class extends Component {
  static async getInitialProps ({ req, asPath, url, ...props }) {
    const isServer = !!req

    const { query: { id: objectID } } = props

    const item = isServer
      ? await algoliaIndex.getObject(objectID)
      : JSON.parse(window.sessionStorage.getItem('hit'))

    const layout = {
      url: item.link,
      title: `${item.title} | Windtoday`,
      ogImage: item.image,
      description: item.description || getFallbackDescription(item)
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
