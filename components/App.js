/* global APP */

import { Configure } from 'react-instantsearch/dom'
import { InstantSearch } from './Instantsearch'
import FloatingButton from './FloatingButton'
import CurrentFilters from './CurrentFilters'
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

const parseTags = (str, createRefine) =>
  str.replace(new RegExp(' AND ', 'g'), ' ').split(' ').map(str => {
    const [attributeName, value] = str.split(':')
    const refine = createRefine({ attributeName, value })
    return { attributeName, value, refine }
  })

const serializeTags = collection => {
  const items = collection.map(item => `${item.attributeName}:${item.value}`)
  const separator = items.length < 2 ? '' : ' AND '
  return items.join(separator)
}

export default class extends Component {
  constructor (props) {
    super(props)

    const { searchState } = this.props
    const filters =
      searchState && searchState.configure && searchState.configure.filters
        ? parseTags(searchState.configure.filters, this.removeTag)
        : []

    this.state = {
      indexName: 'windsurf',
      tags: filters
    }
  }

  addTag = tag => {
    const { tags } = this.state
    const index = tags.findIndex(
      ({ attributeName, value }) =>
        tag.value === value && tag.attributeName === attributeName
    )
    const isPresent = index !== -1
    if (!isPresent) this.setState({ tags: this.state.tags.concat(tag) })
  }

  removeTag = tag => () => {
    const { tags } = this.state

    const nextTags = tags.filter(
      ({ attributeName, value }) =>
        tag.value !== value && tag.attributeName !== attributeName
    )

    this.setState({ tags: nextTags })
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
        <Configure hitsPerPage={15} filters={serializeTags(this.state.tags)} />
        <Headroom
          style={{ boxShadow: 'rgb(120, 140, 148) 0px -1px 4px' }}
          ref={node => (this.state.headroom = node)}
        >
          <AppBar searchState={searchState} />
          <CategoryTabs attributeName='category' />
        </Headroom>
        <Main>
          <CurrentFilters
            tags={this.state.tags}
            headroom={this.state.headroom}
          />
          <Hits
            hitComponent={Hit}
            addTag={this.addTag}
            removeTag={this.removeTag}
          />
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
