/* global APP */
/* eslint-disable react/jsx-indent-props */

import { Configure } from 'react-instantsearch/dom'
import { Clock, Award } from 'react-feather'
import styled from 'styled-components'
import Headroom from 'react-headroom'
import PropTypes from 'prop-types'
import { Component } from 'react'
import { Box } from 'rebass'

import FloatingFilterButton from './FloatingButton/Filter'
import FloatingContactButton from './FloatingButton/Contact'
import { InstantSearch } from './Instantsearch'
import CategoryTabs from './CategoryTabs'
import SingleHit from './SingleHit'
import AppBar from './AppBar'
import Hits from './Hits'

import NProgress from 'nprogress'
import Router from 'next/router'

Router.onRouteChangeStart = url => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

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
      refinements: {
        brand: [],
        model: [],
        condition: [],
        year: [],
        modality: [],
        'mast type': [],
        'fin type': [],
        'boom type': [],
        'sail size range': [],
        'board size range': [],
        'mast size range': [],
        'boom size range': [],
        'mast carbon range': []
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

  renderSingleHit () {
    const { item } = this.props

    return (
      <Main>
        <SingleHit hit={item} />
        <FloatingContactButton hit={item} />
      </Main>
    )
  }

  renderHits () {
    const {
      resultsState,
      onSearchStateChange,
      searchState,
      createURL,
      isServer
    } = this.props

    const { headroom, refinements } = this.state

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
        <Configure hitsPerPage={APP.algolia.hitsPerPage} />
        <Headroom
          style={{ boxShadow: 'rgb(120, 140, 148) 0px -2px 7px 0' }}
          ref={node => (this.state.headroom = node)}
        >
          <AppBar searchState={searchState} />
          <CategoryTabs attributeName='category' />
        </Headroom>
        <Main>
          <Hits
            headroom={headroom}
            refine={this.refine}
            refinements={refinements}
            onRefine={this.onRefine}
            isServer={isServer}
          />

          <FloatingFilterButton
            defaultRefinement={APP.algolia.indexName}
            items={[
              { icon: Award, value: 'sort_by_timestamp', label: 'Recent' },
              { icon: Clock, value: 'windsurf', label: 'Price Score' }
            ]}
          />
        </Main>
      </InstantSearch>
    )
  }

  render () {
    const { item } = this.props
    return item ? this.renderSingleHit() : this.renderHits()
  }

  static propTypes = {
    searchState: PropTypes.object,
    resultsState: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onSearchStateChange: PropTypes.func,
    createURL: PropTypes.func
  }
}
