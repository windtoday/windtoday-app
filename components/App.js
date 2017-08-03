/* global APP */

import PropTypes from 'prop-types'
import { Configure } from 'react-instantsearch/dom'
import { InstantSearch } from './Instantsearch'
import Hits from './Hits'
import AppBar from './AppBar'
import CategoryTabs from './CategoryTabs'

export default class extends React.Component {
  static propTypes = {
    searchState: PropTypes.object,
    resultsState: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onSearchStateChange: PropTypes.func,
    createURL: PropTypes.func
  }

  render () {
    return (
      <InstantSearch
        appId={APP.algolia.appId}
        apiKey={APP.algolia.apiKey}
        indexName={APP.algolia.indexName}
        resultsState={this.props.resultsState}
        onSearchStateChange={this.props.onSearchStateChange}
        searchState={this.props.searchState}
        createURL={this.props.createURL}
      >
        <Configure hitsPerPage={10} />
        <AppBar />
        <CategoryTabs attributeName='category' />
        <Hits />
      </InstantSearch>
    )
  }
}
