/* eslint-disable react/jsx-indent-props */

import { connectInfiniteHits } from 'react-instantsearch/connectors'
import InfiniteScroll from 'react-infinite-scroll-component'
import { createConnector } from 'react-instantsearch'
import { CloudRain } from 'react-feather'
import { Box, Text, Flex } from 'rebass'
import PropTypes from 'prop-types'
import { Component } from 'react'
import { debounce } from 'lodash'

const NotResults = () => (
  <Flex
    flexDirection='column'
    justifyContent='center'
    alignItems='center'
    pt={5}
    style={{ backgroundColor: 'gray0' }}
  >
    <Box color='cyan'>
      <CloudRain size={120} />
    </Box>

    <Text fontSize={4} mt={4}>
      {"sorry, we didn't found it."}
    </Text>
  </Flex>
)

const CustomInfiniteHits = class extends Component {
  componentDidMount = () => {
    const scrollPosition = window.sessionStorage.getItem('scrollPosition')
    if (scrollPosition) window.scrollTo(0, scrollPosition)
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = debounce(() => {
    const scrollPosition = window.pageYOffset
    const { hits } = this.props
    if (scrollPosition) {
      window.sessionStorage.setItem('scrollPosition', scrollPosition)
    }
    window.sessionStorage.setItem('hits', JSON.stringify(hits))
  }, 150)

  render () {
    const {
      ItemComponent,
      refine,
      hasMore,
      refineFilter,
      isServer
    } = this.props

    const cachedHits = !isServer && window.sessionStorage.getItem('hits')
    const hits = cachedHits ? JSON.parse(cachedHits) : this.props.hits

    return (
      <InfiniteScroll next={refine} hasMore={hasMore} scrollThreshold={0.4}>
        {hits.map(hit => (
          <ItemComponent key={hit.objectID} hit={hit} refine={refineFilter} />
        ))}
      </InfiniteScroll>
    )
  }
}

const InfiniteHits = ({
  hitComponent: ItemComponent,
  hits,
  hasMore,
  hasResults,
  refine,
  refineFilter,
  ...props
}) =>
  hasResults ? (
    <CustomInfiniteHits
      ItemComponent={ItemComponent}
      hits={hits}
      refine={refine}
      hasMore={hasMore}
      refineFilter={refineFilter}
      {...props}
    />
  ) : (
    <NotResults />
  )

InfiniteHits.propTypes = {
  hits: PropTypes.array,
  hitComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
    .isRequired,
  refine: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
  hasResults: PropTypes.bool.isRequired,
  query: PropTypes.string
}

const connectConditionalResults = createConnector({
  displayName: 'ConditionalResults',
  getProvidedProps (props, searchState, searchResults) {
    const { query } = searchState
    const results = searchResults.results || {}
    const { nbHits = 0 } = results
    const hasResults = nbHits > 0
    return { query, hasResults }
  }
})

export default connectInfiniteHits(connectConditionalResults(InfiniteHits))
