import { Box, BackgroundImage, Divider, Text, Flex, NavLink } from 'rebass'
import Router from 'next/router'
import { Component } from 'react'
import { ChevronLeft } from 'react-feather'

import ProgressBar from 'components/ProgressBar'

import MeasureText from 'components/MeasureText'
import getFormatDate from 'util/get-format-date'
import Small from 'components/Small'
import getImageUrl from 'util/get-image-url'
import HitDetails from './Details'
import Badge from 'components/Badge'

const CARD_HEIGHT = '292px'

const BackLink = NavLink.extend`
  width: 40px;
  height: 40px;
  align-items: center;
  text-align: center;
  border-radius: 99999px;
  justify-content: center;
`

const BackgroundImageGradient = BackgroundImage.extend`
  background: ${props =>
    `linear-gradient(rgba(0, 0, 0, 0.2) 20%, rgba(0, 0, 0, 0.7) 100%), url("${
      props.src
    }") center center / cover no-repeat`};
  padding-bottom: ${CARD_HEIGHT};
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
      year,
      condition,
      description
    } = hit

    return (
      <div>
        <BackgroundImageGradient src={getImageUrl(hit)}>
          <Flex
            flexDirection='column'
            justifyContent='space-between'
            p={3}
            style={{ height: CARD_HEIGHT }}
          >
            <Flex
              alignContent='center'
              justifyContent='space-between'
              color='white90'
            >
              <BackLink
                bg='black'
                color='white'
                ml={0}
                onClick={e => {
                  const hasPreviousLink = window.sessionStorage.getItem('hits')
                  return hasPreviousLink
                    ? window.history.back()
                    : Router.push('/')
                }}
              >
                <ChevronLeft size={24} />
              </BackLink>
              <Badge
                bg='white'
                fontSize={2}
                px={'22px'}
                py={'6px'}
                ml={0}
                color='black'
                letterSpacing='caps'
                fontWeight='normal'
              >
                €{price}
              </Badge>
            </Flex>
            <Box>
              <Flex flexDirection='column' alignContent='flex-start'>
                <MeasureText is='h2' mb={2} color='white'>
                  {title}
                </MeasureText>
                <Text fontSize={1} color='white60'>
                  {getFormatDate(updatedAt)} by {provider}
                </Text>
              </Flex>
            </Box>
          </Flex>
        </BackgroundImageGradient>
        <Box>
          <Box px={3} pt={3}>
            <ProgressBar value={priceScore} mb={3} />
          </Box>
          <Flex alignContent='center' justifyContent='space-around' pb={3}>
            <Flex
              alignContent='center'
              flexDirection='column'
              alignItems='center'
            >
              <Text fontSize={4} fontWeight='semibold'>
                {brand || 'N/A'}
              </Text>
              <Small color='gray' fontSize={0} m={0} p={0}>
                brand
              </Small>
            </Flex>
            <Flex
              alignContent='center'
              flexDirection='column'
              alignItems='center'
            >
              <Text fontSize={4} fontWeight='semibold'>
                {year || 'N/A'}
              </Text>
              <Small color='gray' fontSize={0} m={0} p={0}>
                year
              </Small>
            </Flex>
            <Flex
              alignContent='center'
              flexDirection='column'
              alignItems='center'
            >
              <Text fontSize={4} fontWeight='semibold'>
                {condition || 'N/A'}
              </Text>
              <Small color='gray' fontSize={0} m={0} p={0}>
                condition
              </Small>
            </Flex>
          </Flex>
          {description && (
            <Text fontSize={2} mx={3} py={2}>
              {description}
            </Text>
          )}
          <Box mx={3}>
            <Divider borderColor='gray1' />
          </Box>
          <HitDetails hit={hit} />
        </Box>
      </div>
    )
  }
}

export default ({ hit, ...props }) => <SingleHit hit={hit} />
