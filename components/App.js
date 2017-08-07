/* global APP */

import { Configure } from 'react-instantsearch/dom'
import { InstantSearch } from './Instantsearch'
import FloatingButton from './FloatingButton'
import CategoryTabs from './CategoryTabs'
import Headroom from 'react-headroom'
import PropTypes from 'prop-types'
import AppBar from './AppBar'
import Hits from './Hits'
import Hit from './Hit'

const App = ({ resultsState, onSearchStateChange, searchState, createURL }) => {
  return (
    <InstantSearch
      appId={APP.algolia.appId}
      apiKey={APP.algolia.apiKey}
      indexName={APP.algolia.indexName}
      resultsState={resultsState}
      onSearchStateChange={onSearchStateChange}
      searchState={searchState}
      createURL={createURL}
    >
      <Configure hitsPerPage={10} />
      <Headroom style={{ boxShadow: 'rgb(120, 140, 148) 0px -1px 4px' }}>
        <AppBar />
        <CategoryTabs attributeName='category' />
      </Headroom>
      <Hits hitComponent={Hit} />
      <FloatingButton />
    </InstantSearch>
  )
}

App.propTypes = {
  searchState: PropTypes.object,
  resultsState: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onSearchStateChange: PropTypes.func,
  createURL: PropTypes.func
}

export default App
