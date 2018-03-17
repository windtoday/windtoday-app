/* global APP */
/* eslint-disable react/jsx-indent-props */

import { Configure } from 'react-instantsearch/dom'
import { Clock, Award } from 'react-feather'
import styled from 'styled-components'
import Headroom from 'react-headroom'
import PropTypes from 'prop-types'
import { Component } from 'react'
import { Box, Divider } from 'rebass'

import FloatingFilterButton from './FloatingButton/Filter'
import ContactButton from './SingleHit/ContactButton'
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
  componentDidMount () {
    if (!window.HW_config) {
      window.HW_config = {
        selector: '.changelog',
        account: 'xd4VWx'
      }
    }

    const script = document.createElement('script')
    script.src = '//cdn.headwayapp.co/widget.js'
    script.async = true
    document.body.appendChild(script)
  }

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

  refine = ({ attribute, value }) => {
    this.setState(state => {
      const index = state.refinements[attribute].indexOf(value)

      if (index === -1) {
        const oldValue = state.refinements[attribute]
        return {
          ...state,
          refinements: {
            ...state.refinements,
            [attribute]: [...oldValue, value]
          }
        }
      }

      const newValue = state.refinements[attribute].slice()
      newValue.splice(index, 1)
      return {
        ...state,
        refinements: {
          ...state.refinements,
          [attribute]: newValue
        }
      }
    })
  }

  onRefine = ({ attribute, value }) =>
    this.setState(state => ({
      ...state,
      refinements: {
        ...state.refinements,
        [attribute]: value
      }
    }))

  renderSingleHit () {
    const { item } = this.props

    return (
      <Main>
        <SingleHit hit={item} />
        <ContactButton hit={item} />
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
          style={{ background: 'white' }}
          ref={node => (this.state.headroom = node)}
        >
          <AppBar searchState={searchState} />
          <Divider w={1} color='gray0' />
          <CategoryTabs attribute='category' />
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
              { icon: Clock, value: 'sort_by_timestamp', label: 'Recent' },
              { icon: Award, value: 'windsurf', label: 'Price Score' }
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
