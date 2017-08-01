import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Text, Flex, Avatar, Divider, Box, BackgroundImage } from 'rebass'
import getImageUrl from 'util/get-image-url'

const AVATAR_SIZE = 40

const Content = styled(Box)`
margin: 0 .32813rem;
`

const SecondaryContent = styled(Content)`
min-width: ${AVATAR_SIZE}px;
max-width: 3.28125rem;
flex-grow: 1;
`

const PrimaryContent = styled(Content)`
flex-grow: 7;
`
const HitComponent = ({ hit }) =>
  <Box>
    <Box py={3} px={2}>
      <Flex direction='row'>
        <SecondaryContent>
          <Avatar
            size={40}
            src='https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'
          />
        </SecondaryContent>
        <PrimaryContent>
          <Box>
            <Text is='span' bold>{hit.provider}</Text>{' · '}
            <Text is='span' color='gray7'>€{hit.price}</Text>{' · '}
            <Text is='span' color='gray7'>5min</Text>
          </Box>
          <Box>
            <Text>{hit.title}</Text>
          </Box>
          <Box mt={2}>
            <BackgroundImage src={getImageUrl(hit, 300)} />
          </Box>
        </PrimaryContent>
      </Flex>
    </Box>

    <Divider w={1} color='gray' />
  </Box>

HitComponent.propTypes = {
  hit: PropTypes.object
}

export default HitComponent
