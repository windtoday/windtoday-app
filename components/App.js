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
        appId='PDZK7H6PD0'
        apiKey='911167d1e62d76e16e9cd746c0b1a684'
        indexName='dev_windsurf'
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
