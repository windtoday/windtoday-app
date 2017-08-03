import { connectInfiniteHits } from 'react-instantsearch/connectors'
import InfiniteScroll from 'react-infinite-scroll-component'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { media } from 'util/style'
import { Component } from 'react'
import { Box } from 'rebass'

const CustomBox = styled(Box)`
${media.large`
  max-width: 600px;
  margin: 0 auto;
`}
`

class InfiniteHits extends Component {
  render () {
    const { hitComponent: ItemComponent, hits, hasMore, refine } = this.props
    const renderedHits = hits.map(hit =>
      <ItemComponent key={hit.objectID} hit={hit} />
    )

    return (
      <CustomBox>
        <InfiniteScroll next={refine} hasMore={hasMore} scrollThreshold={0.4}>
          {renderedHits}
        </InfiniteScroll>
      </CustomBox>
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
