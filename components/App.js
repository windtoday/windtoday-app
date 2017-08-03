/* global APP */

import { Configure } from 'react-instantsearch/dom'
import { InstantSearch } from './Instantsearch'
import CategoryTabs from './CategoryTabs'
import Headroom from 'react-headroom'
import PropTypes from 'prop-types'
import AppBar from './AppBar'
import Hits from './Hits'
import Hit from './Hit'

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
        <Headroom>
          <AppBar />
          <CategoryTabs attributeName='category' />
        </Headroom>
        <Hits hitComponent={Hit} />
      </InstantSearch>
    )
  }
}
