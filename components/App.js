/* global APP */

import { Configure, CurrentRefinements } from 'react-instantsearch/dom'
import { InstantSearch } from './Instantsearch'
import FloatingButton from './FloatingButton'
import CategoryTabs from './CategoryTabs'
import Headroom from 'react-headroom'
import PropTypes from 'prop-types'
import { Component } from 'react'
import AppBar from './AppBar'
import Hits from './Hits'
import Hit from './Hit'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      indexName: 'windsurf'
    }
  }

  setIndexName = indexName => {
    this.setState({ indexName })
  }

  render () {
    const {
      resultsState,
      onSearchStateChange,
      searchState,
      createURL
    } = this.props

    return (
      <InstantSearch
        appId={APP.algolia.appId}
        apiKey={APP.algolia.apiKey}
        indexName={this.state.indexName}
        resultsState={resultsState}
        onSearchStateChange={onSearchStateChange}
        searchState={searchState}
        createURL={createURL}
      >
        <Configure hitsPerPage={5} />
        <Headroom style={{ boxShadow: 'rgb(120, 140, 148) 0px -1px 4px' }}>
          <AppBar />
          <CategoryTabs attributeName='category' />
        </Headroom>
        <CurrentRefinements />
        <Hits hitComponent={Hit} />
        <FloatingButton setIndexName={this.setIndexName} />
      </InstantSearch>
    )
  }

  static propTypes = {
    searchState: PropTypes.object,
    resultsState: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onSearchStateChange: PropTypes.func,
    createURL: PropTypes.func
  }
}
