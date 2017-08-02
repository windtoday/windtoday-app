import PropTypes from 'prop-types'
import styled from 'styled-components'
import {ChevronDown} from 'react-feather'

import { Badge, Text, Flex, Divider, Box, BackgroundImage } from 'rebass'
import ProgressArc from 'progress-arc-component'
import getImageUrl from 'util/get-image-url'
import ColourMeLife from 'colour-me-life'
import TimeAgo from 'react-timeago'

const formatter = (value, unit, suffix) => {
  if (value !== 1) unit += 's'
  return `${value}${unit.charAt(0)}`
}

const gradient = new ColourMeLife()
  .setSpectrum('#6e4b46', '#9e6b64', '#1ac391')
  .setNumberRange(0, 100)

const AVATAR_SIZE = '40px'

const Content = styled(Box)`
margin: 0 .32813rem;
`
const SecondaryContent = styled(Content)`
min-width: ${AVATAR_SIZE};
max-width: 3.28125rem;
flex-grow: 1;
`
const PrimaryContent = styled(Content)`
flex-grow: 7;
`
const CustomProgressArc = styled(ProgressArc)`
margin: 0 !important;
height: ${AVATAR_SIZE} !important;
text {
  font-size: 70px !important;
}
`
const CustomBackgroundImage = styled(BackgroundImage)`
border: 1px solid #ccd6dd;
border-radius: .35rem;
`
const getColor = value => `#${gradient.colourAt(value)}`

const CustomBadge = styled(Badge)`
border-radius: 1rem;
padding-right: 8px;
padding-left: 8px;
`

const HitComponent = ({ hit }) =>
  <Box>
    <Box pt={3} pb={2} px={2}>
      <Flex direction='row'>
        <SecondaryContent>
          <CustomProgressArc
            value={hit.priceScore}
            unit=''
            arcColor={getColor(hit.priceScore)}
            textColor='black'
            rounded
          />
        </SecondaryContent>
        <PrimaryContent>
          <Flex direction='row' mb={1} justify='space-between' align='center'>
            <Box>
              <Text is='span' bold>{hit.provider}</Text>{' · '}
              <Text is='span' color='gray7'>€{hit.price}</Text>{' · '}
              <Text is='span' color='gray7'><TimeAgo formatter={formatter} date={hit.timestamp} /></Text>
            </Box>
            <Box>
              <ChevronDown color='gray' />
            </Box>
          </Flex>
          <Box>
            <Text>{hit.title}</Text>
          </Box>
          <Box mt={2}>
            <CustomBackgroundImage src={getImageUrl(hit, 300)} />
          </Box>
          <Box mt={2}>
            {hit.brand && <CustomBadge m={1}>{hit.brand}</CustomBadge>}
            {hit.model && <CustomBadge m={1}>{hit.model}</CustomBadge>}
            <CustomBadge m={1}>100l to 110l</CustomBadge>
          </Box>
        </PrimaryContent>
      </Flex>
    </Box>

    <Divider w={1} color='gray3' />
  </Box>

HitComponent.propTypes = {
  hit: PropTypes.object
}

export default HitComponent
