/* global APP */

import { Configure } from 'react-instantsearch/dom'
import styled from 'styled-components'
import Headroom from 'react-headroom'
import PropTypes from 'prop-types'
import { Component } from 'react'
import { Box } from 'rebass'

import { InstantSearch } from './Instantsearch'
import FloatingFilterButton from './FloatingFilterButton'
import FloatingContactButton from './FloatingContactButton'
import CategoryTabs from './CategoryTabs'
import SingleHit from './SingleHit'
import AppBar from './AppBar'
import Hits from './Hits'

const Main = styled(Box)`
@media screen and (min-width: 600px) {
  max-width: 600px;
  margin: 0 auto;
}
`
export default class extends Component {
  constructor (props) {
    super(props)

    this.state = {
      indexName: APP.algolia.indexName,
      refinements: {
        brand: [],
        model: [],
        condition: [],
        'mast type': [],
        'fin type': [],
        'boom type': [],
        'sail type': [],
        'sail size range': [],
        'board size range': [],
        'mast size range': [],
        'mast carbon range': [],
        'boom size range': []
      }
    }
  }

  refine = ({ attributeName, value }) => {
    this.setState(state => {
      const index = state.refinements[attributeName].indexOf(value)

      if (index === -1) {
        const oldValue = state.refinements[attributeName]
        return {
          ...state,
          refinements: {
            ...state.refinements,
            [attributeName]: [...oldValue, value]
          }
        }
      }

      const newValue = state.refinements[attributeName].slice()
      newValue.splice(index, 1)
      return {
        ...state,
        refinements: {
          ...state.refinements,
          [attributeName]: newValue
        }
      }
    })
  }

  onRefine = ({ attributeName, value }) =>
    this.setState(state => ({
      ...state,
      refinements: {
        ...state.refinements,
        [attributeName]: value
      }
    }))

  setIndexName = indexName => {
    this.setState({ indexName })
  }

  render () {
    const {
      resultsState,
      onSearchStateChange,
      searchState,
      createURL,
      isPopUp,
      filters
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
        <Configure hitsPerPage={APP.algolia.hitsPerPage} filters={filters} />
        <Headroom
          style={{ boxShadow: 'rgb(120, 140, 148) 0px -1px 4px' }}
          ref={node => (this.state.headroom = node)}
        >
          <AppBar searchState={searchState} isPopUp={isPopUp} />
          {!isPopUp && <CategoryTabs attributeName='category' />}
        </Headroom>
        <Main>
          {isPopUp
            ? <SingleHit />
            : <Hits
                headroom={this.state.headroom}
                refine={this.refine}
                refinements={this.state.refinements}
                onRefine={this.onRefine}
              />}
          {isPopUp
            ? <FloatingContactButton />
            : <FloatingFilterButton setIndexName={this.setIndexName} />}
        </Main>
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
