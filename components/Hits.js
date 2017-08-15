import { connectInfiniteHits } from 'react-instantsearch/connectors'
import InfiniteScroll from 'react-infinite-scroll-component'
import { createConnector } from 'react-instantsearch'
import { color, space } from 'styled-system'
import { CloudRain } from 'react-feather'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Text, Flex } from 'rebass'

const CustomCloudRain = styled(CloudRain)`
${color}
${space}
`

const InfiniteHits = ({
  hitComponent: ItemComponent,
  hits,
  hasMore,
  hasResults,
  query,
  refine,
  refineFilter,
  addTag,
  removeTag,
  ...props
}) => {
  if (hasResults) {
    return (
      <InfiniteScroll next={refine} hasMore={hasMore} scrollThreshold={0.4}>
        {hits.map(hit =>
          <ItemComponent key={hit.objectID} hit={hit} refine={refineFilter} />
        )}
      </InfiniteScroll>
    )
  }

  return (
    <Flex direction='column' justify='center' align='center' mt={5}>
      <CustomCloudRain color='blue' size={120} />
      <Text fontSize={4} mt={4}>
        sorry, we didn't found it.
      </Text>
    </Flex>
  )
}

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
