/* global APP */

import { Configure } from 'react-instantsearch/dom'
import VirtualRefinementList from './VirtualRefinementList'
import CurrentRefinements from './CurrentRefinements'
import { InstantSearch } from './Instantsearch'
import FloatingButton from './FloatingButton'
import CategoryTabs from './CategoryTabs'
import styled from 'styled-components'
import Headroom from 'react-headroom'
import PropTypes from 'prop-types'
import { Component } from 'react'
import AppBar from './AppBar'
import { Box } from 'rebass'
import Hits from './Hits'
import Hit from './Hit'

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
        <Configure hitsPerPage={APP.algolia.hitsPerPage} />
        <Headroom
          style={{ boxShadow: 'rgb(120, 140, 148) 0px -1px 4px' }}
          ref={node => (this.state.headroom = node)}
        >
          <AppBar searchState={searchState} />
          <CategoryTabs attributeName='category' />
        </Headroom>
        <Main>
          <CurrentRefinements
            headroom={this.state.headroom}
            refineFilter={this.refine}
          />
          <VirtualRefinementList
            attributeName='brand'
            defaultRefinement={[...this.state.refinements.brand]}
            onRefine={this.onRefine}
          />
          <VirtualRefinementList
            attributeName='model'
            defaultRefinement={[...this.state.refinements.model]}
            onRefine={this.onRefine}
          />
          <VirtualRefinementList
            attributeName='condition'
            defaultRefinement={[...this.state.refinements.condition]}
            onRefine={this.onRefine}
          />
          <VirtualRefinementList
            attributeName='mast type'
            defaultRefinement={[...this.state.refinements['mast type']]}
            onRefine={this.onRefine}
          />
          <VirtualRefinementList
            attributeName='fin type'
            defaultRefinement={[...this.state.refinements['fin type']]}
            onRefine={this.onRefine}
          />
          <VirtualRefinementList
            attributeName='boom type'
            defaultRefinement={[...this.state.refinements['boom type']]}
            onRefine={this.onRefine}
          />
          <VirtualRefinementList
            attributeName='sail size range'
            defaultRefinement={[...this.state.refinements['sail size range']]}
            onRefine={this.onRefine}
          />
          <VirtualRefinementList
            attributeName='board size range'
            defaultRefinement={[...this.state.refinements['board size range']]}
            onRefine={this.onRefine}
          />
          <VirtualRefinementList
            attributeName='mast size range'
            defaultRefinement={[...this.state.refinements['mast size range']]}
            onRefine={this.onRefine}
          />
          <VirtualRefinementList
            attributeName='mast carbon range'
            defaultRefinement={[...this.state.refinements['mast carbon range']]}
            onRefine={this.onRefine}
          />
          <VirtualRefinementList
            attributeName='boom size range'
            defaultRefinement={[...this.state.refinements['boom size range']]}
            onRefine={this.onRefine}
          />
          <Hits hitComponent={Hit} refineFilter={this.refine} />
          <FloatingButton setIndexName={this.setIndexName} />
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
