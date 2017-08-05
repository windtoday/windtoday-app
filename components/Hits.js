import { connectInfiniteHits } from 'react-instantsearch/connectors'
import InfiniteScroll from 'react-infinite-scroll-component'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Component } from 'react'
import { Box } from 'rebass'

const ResponsiveBox = styled(Box)`
@media screen and (min-width: 600px) {
  max-width: 600px;
  margin: 0 auto;
}
`

class InfiniteHits extends Component {
  render () {
    const { hitComponent: ItemComponent, hits, hasMore, refine } = this.props
    const renderedHits = hits.map(hit =>
      <ItemComponent key={hit.objectID} hit={hit} />
    )

    return (
      <ResponsiveBox>
        <InfiniteScroll next={refine} hasMore={hasMore} scrollThreshold={0.4}>
          {renderedHits}
        </InfiniteScroll>
      </ResponsiveBox>
    )
  }
}

InfiniteHits.propTypes = {
  hits: PropTypes.array,
  hitComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
    .isRequired,
  hasMore: PropTypes.bool.isRequired,
  refine: PropTypes.func.isRequired
}

export default connectInfiniteHits(InfiniteHits)
