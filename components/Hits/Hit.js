import { Text, Flex, Divider, Box, BackgroundImage } from 'rebass'
import { Highlight } from 'react-instantsearch/dom'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import Router from 'next/router'

import ProgressBar from 'components/ProgressBar'
import getFormatDate from 'util/get-format-date'
import MeasureText from 'components/MeasureText'
import getImageUrl from 'util/get-image-url'
import Badge from 'components/Badge'

const cardStyle = css`
height: 64vw;
max-height: 312px;
`

const CardBackgroundImage = styled(BackgroundImage)`
${cardStyle}
border-top-left-radius: .35rem;
border-top-right-radius: .35rem;
padding: 0;
cursor: pointer;
background: ${props =>
  `linear-gradient(rgba(0, 0, 0, 0.2) 20%, rgba(0, 0, 0, 0.7) 100%), url("${props.src}") center center / cover no-repeat`};
`

const CardFlex = styled(Flex)`
${cardStyle}
`

const RadiusFlex = styled(Flex)`
border-radius: .35rem;
box-shadow: 0 8px 16px 0 rgba(0, 2, 5, 0.04), inset 0 -1px 0 0 rgba(29, 30, 41, 0.1);
`

const CardBox = Box.extend`
  border-bottom-left-radius: .35rem;
  border-bottom-right-radius: .35rem;
  background-color: white;
`

const TAGS = [
  'brand',
  'model',
  'condition',
  'year',
  'modality',
  'mast type',
  'fin type',
  'boom type',
  'sail size range',
  'board size range',
  'mast size range',
  'boom size range',
  'mast carbon range'
]

const renderTags = (hit, refine) =>
  TAGS.map((tag, index) => {
    const value = hit[tag]
    if (value == null) return null
    const onClick = e => refine({ attributeName: tag, value })
    return (
      <Badge
        my={1}
        mr={2}
        ml={0}
        px={3}
        py={2}
        f={0}
        bg='cyan1'
        color='cyan6'
        key={index}
        onClick={onClick}
        caps
        bold
      >
        {value}
      </Badge>
    )
  })

const HitComponent = ({ hit, refine }) => {
  const { objectID: id } = hit
  const itemURL = `/item?id=${id}`

  const onClick = e => {
    window.sessionStorage.setItem('hit', JSON.stringify(hit))
    return Router.push(itemURL)
  }

  return (
    <RadiusFlex mx={3} my={3} direction='column'>
      <CardBackgroundImage is='a' src={getImageUrl(hit, 600)} onClick={onClick}>
        <CardFlex direction='column' justify='space-between' p={3}>
          <Flex direction='row' justify='flex-start'>
            <Badge
              bg='white'
              f={2}
              px={'22px'}
              py={'6px'}
              ml={0}
              color='black'
              caps
            >
              €{hit.price}
            </Badge>
          </Flex>
          <Box>
            <MeasureText is='h2' mb={2} color='white'>
              <Highlight attributeName='title' hit={hit} />
            </MeasureText>
            <Text f={1} color='white60'>
              {getFormatDate(hit.updatedAt)} by {hit.provider}
            </Text>
          </Box>
        </CardFlex>
      </CardBackgroundImage>
      <CardBox px={3} py={2}>
        <ProgressBar value={hit.priceScore} />
        <Box my={2}>
          {renderTags(hit, refine)}
        </Box>
      </CardBox>
    </RadiusFlex>
  )
}

HitComponent.propTypes = {
  hit: PropTypes.object
}

export default HitComponent
