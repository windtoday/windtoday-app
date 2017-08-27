import { Component } from 'react'

import { Badge, Box, BackgroundImage, Divider, Text, Flex } from 'rebass'

import { Line } from 'react-progressbar.js'
import styled from 'styled-components'

import { cx, priceScoreGradientAt } from 'config/theme'
import getFormatDate from 'util/get-format-date'
import getImageUrl from 'util/get-image-url'
import HitDetails from './Details'
import Tag from 'components/Tag'

const CARD_HEIGHT = '292px'

const BackgroundImageGradient = BackgroundImage.extend`
  background: ${props =>
    `linear-gradient(rgba(0, 0, 0, 0.2) 20%, rgba(0, 0, 0, 0.7) 100%), url("${props.src}") center center / cover no-repeat`};
  padding-bottom: ${CARD_HEIGHT};
`

const MeasureText = styled(Text)`
max-width: 80%;
`

const SingleHit = class extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }
  render () {
    const { hit } = this.props
    const {
      price,
      title,
      provider,
      updatedAt,
      priceScore,
      brand,
      model,
      condition
    } = hit

    return (
      <div>
        <BackgroundImageGradient src={getImageUrl(hit)}>
          <Flex
            direction='column'
            justify='space-between'
            p={3}
            style={{ height: CARD_HEIGHT }}
          >
            <Box>
              <Badge bg='green7' f={2} px={2} color='white' bold>
                €{price}
              </Badge>
            </Box>

            <Box>
              <Flex direction='column' align='flex-end'>
                <Flex pb={1} align='center' direction='row-reverse'>
                  <Text f={1} color='white'>
                    {getFormatDate(updatedAt)} by {provider}
                  </Text>
                </Flex>
                <MeasureText is='h2' color='white' right bold>
                  {title}
                </MeasureText>
              </Flex>
            </Box>
          </Flex>
        </BackgroundImageGradient>
        <Box p={2}>
          <Line
            progress={priceScore / 100}
            options={{
              strokeWidth: 2,
              easing: 'easeOut',
              duration: 1400,
              trailColor: cx('gray1'),
              svgStyle: { borderRadius: '12px' },
              step: (state, bar) => {
                const step = 100 - state.offset
                bar.path.setAttribute('stroke', priceScoreGradientAt(step || 0))
              }
            }}
            initialAnimate
          />
          <Text f={1} bold center>
            {priceScore} / 100
          </Text>
          <Flex align='center' justify='space-around'>
            <Flex align='center' direction='column' p={2}>
              <Text f={4}>
                {brand || 'N/A'}
              </Text>
              <Tag invert f={2} mx={0} my={0} attributeName='brand'>
                brand
              </Tag>
            </Flex>
            <Flex align='center' direction='column' p={2}>
              <Text f={4}>
                {model || 'N/A'}
              </Text>
              <Tag invert f={2} mx={0} my={0} attributeName='model'>
                model
              </Tag>
            </Flex>
            <Flex align='center' direction='column' p={2}>
              <Text f={4}>
                {condition || 'N/A'}
              </Text>
              <Tag invert f={2} mx={0} my={0} attributeName='condition'>
                condition
              </Tag>
            </Flex>
          </Flex>
          <Divider w={1} my={3} color='gray1' />
          <HitDetails hit={hit} />
        </Box>
      </div>
    )
  }
}

const CustomHits = ({ hit, ...props }) => {
  return <SingleHit hit={hit} />
}

export default CustomHits