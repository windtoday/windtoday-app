import {
  Badge,
  Box,
  BackgroundImage,
  Avatar,
  Divider,
  Text,
  Flex
} from 'rebass'
import { Line } from 'react-progressbar.js'
import styled from 'styled-components'

import HitDetails from './Details'
import getImageUrl from 'util/get-image-url'
import { priceScoreGradientAt } from 'config/theme'

const hit = {
  isForced: true,
  title: 'North Warp 8.6m 2014',
  category: ['sails'],
  seller: 'used',
  condition: 'Used',
  provider: 'telstarsurf',
  path: 'sails',
  link:
    'http://www.telstarsurf.com/windsurf/windsurf-sails/used-sails/57644/northsails-warp-2014/?ref=windtodayco',
  image:
    'https://www.telstarsurf.com/cache/img/d939b30cc116/500/500/max/max/warp-2014.jpeg',
  updatedAt: 1502661600000,
  timestamp: 1502744825821,
  brand: 'North',
  model: 'Warp',
  price: 359,
  year: 2014,
  'sail size': 8.6,
  'sail type': 'Race',
  'sail size range': '8m to 9m',
  priceScore: 100,
  priceScoreDetail: {
    byCategory: 100,
    byYear: 100,
    byBrand: 100,
    byModel: 100
  }
}

const TextUpper = styled(Text)`
  text-transform: uppercase;
`

const BackgroundImageGradient = BackgroundImage.extend`
  background: ${props =>
    `linear-gradient(rgba(0, 0, 0, 0.2) 20%, rgba(0, 0, 0, 0.7) 100%), url("${props.src}") center center / cover no-repeat`};
`

const getFormatDate = timestamp =>
  new Date(timestamp).toLocaleString('en-us', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })

export default () =>
  <div>
    <BackgroundImageGradient src={getImageUrl(hit)}>
      <Flex
        direction='column'
        justify='space-between'
        style={{ height: '292px' }}
      >
        <Box p={3}>
          <Badge bg='green7' color='white' bold>
            €{hit.price}
          </Badge>
        </Box>

        <Box p={3}>
          <Flex py={3} direction='column' align='flex-end'>
            <Text is='h2' color='white' bold>
              {hit.title}
            </Text>
            <Flex align='center' direction='row-reverse'>
              <Avatar
                size={24}
                src={`/static/img/provider/${hit.provider}.jpg`}
                ml={2}
              />
              <Text f={1} color='white'>
                {getFormatDate(hit.updatedAt)} by {hit.provider}
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </BackgroundImageGradient>
    <Box p={2}>
      <Line
        progress={Math.round(hit.priceScore / 100)}
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
            {hit.brand}
          </Text>
          <TextUpper is='h6' m={0}>
            brand
          </TextUpper>
        </Flex>
        <Flex align='center' direction='column' flex='1 1 auto' p={2}>
          <Text is='h2' m={0}>
            {hit.model}
          </Text>
          <TextUpper is='h6' m={0}>
            model
          </TextUpper>
        </Flex>
        <Flex align='center' direction='column' flex='1 1 auto' p={2}>
          <Text is='h2' m={0}>
            {hit.condition}
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
