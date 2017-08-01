import {Highlight} from 'react-instantsearch/dom'
import PropTypes from 'prop-types'

import {
  Card,
  Box,
  BackgroundImage,
  Subhead,
  Small
} from 'rebass'

const HitComponent = ({ hit }) =>
  <Card width={256}>
    <BackgroundImage src={hit.image} />
    <Box p={2}>
      <Subhead >
        <Highlight attributeName='type' hit={hit} />
      </Subhead>
      <Subhead>{hit.price}</Subhead>
      <Small>Small meta text</Small>
    </Box>
  </Card>

HitComponent.propTypes = {
  hit: PropTypes.object
}

export default HitComponent
