import PropTypes from 'prop-types';
import {
  RefinementList,
  SearchBox,
  Hits,
  Configure,
  Highlight,
  Pagination,
} from 'react-instantsearch/dom';

import { InstantSearch } from './Instantsearch';
import Hit from './Hit';
import AppBar from './AppBar';
import CategoryBar from './CategoryBar';

export default class extends React.Component {
  static propTypes = {
    searchState: PropTypes.object,
    resultsState: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onSearchStateChange: PropTypes.func,
    createURL: PropTypes.func,
  };

  render() {
    return (
      <InstantSearch
        appId="latency"
        apiKey="6be0576ff61c053d5f9a3225e2a90f76"
        indexName="ikea"
        resultsState={this.props.resultsState}
        onSearchStateChange={this.props.onSearchStateChange}
        searchState={this.props.searchState}
        createURL={this.props.createURL}
      >
        <Configure hitsPerPage={10} />
        <AppBar></AppBar>
        <CategoryBar></CategoryBar>
        <header>
          <h1>React InstantSearch + Next.Js</h1>
          <SearchBox />
        </header>
        <content>
          <menu>
            <RefinementList attributeName="category" />
          </menu>
          <results>
            <Hits hitComponent={Hit} />
          </results>
        </content>
        <footer>
          <Pagination />
          <div>
            See{' '}
            <a href="https://github.com/algolia/react-instantsearch/tree/master/packages/react-instantsearch/examples/next-app">
              source code
            </a>{' '}
            on github
          </div>
        </footer>
      </InstantSearch>
    );
  }
}
