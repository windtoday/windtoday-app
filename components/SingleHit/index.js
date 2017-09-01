import {
  Circle,
  Badge,
  Box,
  BackgroundImage,
  Divider,
  Text,
  Flex,
  NavLink
} from 'rebass'
import Router from 'next/router'
import { Component } from 'react'
import { ChevronLeft } from 'react-feather'

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
  componentWillUnmount () {
    window.sessionStorage.removeItem('hit')
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
            <Flex align='center' justify='space-between' color='white90'>
              <NavLink
                onClick={e => {
                  window.sessionStorage.setItem('scrollPosition', 0)
                  return Router.push('/')
                }}
              >
                <Circle bg='black30' p={1}>
                  <ChevronLeft />
                </Circle>
              </NavLink>
              <Badge
                bg={priceScoreGradientAt(priceScore)}
                f={2}
                px={2}
                color='white'
                bold
              >
                €{price}
              </Badge>
            </Flex>

            <Box>
              <Flex direction='column' align='flex-end'>
                <Text f={1} color='white60'>
                  {getFormatDate(updatedAt)} by {provider}
                </Text>
                <MeasureText is='h2' color='white' right bold>
                  {title}
                </MeasureText>
              </Flex>
            </Box>
          </Flex>
        </BackgroundImageGradient>
        <Box mt={1} p={2}>
          <Flex align='center' direction='row' />
          <Text f={2} px={2} py={2}>
            The Warp is a windsurfing sail designed by North in 2014. It's an
            used race oriented sail, with a total of 8.6 metres of surface.
          </Text>
          <Box py={1}>
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
                  bar.path.setAttribute(
                    'stroke',
                    priceScoreGradientAt(step || 0)
                  )
                }
              }}
              initialAnimate
            />
            <Text f={0} bold center>
              {priceScore} / 100
            </Text>
          </Box>
          <Flex py={1} align='center' justify='space-around'>
            <Flex align='center' direction='column' p={2}>
              <Text f={3}>
                {brand || 'N/A'}
              </Text>
              <Tag caps invert f={0} m={0} p={0} attributeName='brand'>
                brand
              </Tag>
            </Flex>
            <Flex align='center' direction='column' p={2}>
              <Text f={3}>
                {model || 'N/A'}
              </Text>
              <Tag caps invert f={0} m={0} p={0} attributeName='model'>
                model
              </Tag>
            </Flex>
            <Flex align='center' direction='column' p={2}>
              <Text f={3}>
                {condition || 'N/A'}
              </Text>
              <Tag caps invert f={0} m={0} p={0} attributeName='condition'>
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
