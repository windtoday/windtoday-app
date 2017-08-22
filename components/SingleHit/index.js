import {
  Badge,
  Box,
  BackgroundImage,
  Avatar,
  Divider,
  Text,
  Flex
} from 'rebass'

import { connectHits } from 'react-instantsearch/connectors'
import { Line } from 'react-progressbar.js'
import styled from 'styled-components'

import { priceScoreGradientAt } from 'config/theme'
import getFormatDate from 'util/get-format-date'
import getImageUrl from 'util/get-image-url'
import HitDetails from './Details'

const TextUpper = styled(Text)`
  text-transform: uppercase;
`

const BackgroundImageGradient = BackgroundImage.extend`
  background: ${props =>
    `linear-gradient(rgba(0, 0, 0, 0.2) 20%, rgba(0, 0, 0, 0.7) 100%), url("${props.src}") center center / cover no-repeat`};
`

const SingleHit = ({
  price,
  title,
  provider,
  updatedAt,
  priceScore,
  brand,
  model,
  condition,
  ...hit
}) =>
  <div>
    <BackgroundImageGradient src={getImageUrl(hit)}>
      <Flex
        direction='column'
        justify='space-between'
        style={{ height: '292px' }}
      >
        <Box p={3}>
          <Badge bg='green7' color='white' bold>
            €{price}
          </Badge>
        </Box>

        <Box p={3}>
          <Flex py={3} direction='column' align='flex-end'>
            <Text is='h2' color='white' bold>
              {title}
            </Text>
            <Flex align='center' direction='row-reverse'>
              <Avatar
                size={24}
                src={`/static/img/provider/${provider}.jpg`}
                ml={2}
              />
              <Text f={1} color='white'>
                {getFormatDate(updatedAt)} by {provider}
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </BackgroundImageGradient>
    <Box p={2}>
      <Line
        progress={Math.round(priceScore / 100)}
        options={{
          strokeWidth: 3,
          easing: 'easeOut',
          duration: 1400,
          trailColor: '#eee',
          svgStyle: { borderRadius: '12px' },
          step: (state, bar) => {
            const step = 100 - state.offset
            bar.path.setAttribute('stroke', priceScoreGradientAt(step || 0))
          }
        }}
        initialAnimate
      />
      <Flex>
        <Flex align='center' direction='column' flex='1 1 auto' p={2}>
          <Text is='h2' m={0}>
            {brand}
          </Text>
          <TextUpper is='h6' m={0}>
            brand
          </TextUpper>
        </Flex>
        <Flex align='center' direction='column' flex='1 1 auto' p={2}>
          <Text is='h2' m={0}>
            {model}
          </Text>
          <TextUpper is='h6' m={0}>
            model
          </TextUpper>
        </Flex>
        <Flex align='center' direction='column' flex='1 1 auto' p={2}>
          <Text is='h2' m={0}>
            {condition}
          </Text>
          <TextUpper is='h6' m={0}>
            condition
          </TextUpper>
        </Flex>
      </Flex>
      <Divider w={1} color='gray1' />
      <HitDetails hit={hit} />
    </Box>
  </div>

const CustomHits = ({ hits, ...props }) => {
  const [hit] = hits
  return <SingleHit {...hit} />
}

export default connectHits(CustomHits)
