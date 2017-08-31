import { Text, Flex, Divider, Box, BackgroundImage, Link } from 'rebass'
import { Highlight } from 'react-instantsearch/dom'
import ProgressArc from 'progress-arc-component'
import styled from 'styled-components'
import TimeAgo from 'react-timeago'
import PropTypes from 'prop-types'
import Router from 'next/router'

import { cx, priceScoreGradientAt } from 'config/theme'
import Tag, { TagKeys } from 'components/Tag'
import getImageUrl from 'util/get-image-url'

const formatter = (value, unit, suffix) => {
  if (value !== 1) unit += 's'
  return `${value}${unit.charAt(0)}`
}

const Content = styled(Box)`
margin: 0 .32813rem;
`
const SecondaryContent = styled(Content)`
min-width: 48px;
max-width: 3.2rem;
flex-grow: 1;
`
const PrimaryContent = styled(Content)`
flex-grow: 7;
`
const CustomProgressArc = styled(ProgressArc)`
margin: 0 !important;
height: inherit !important;
text {
  font-size: 60px !important;
}
`
const CustomBackgroundImage = styled(BackgroundImage)`
border: 1px solid ${cx('gray2')};
border-radius: .35rem;
height: 48vw;
max-height: 312px;
padding: 0;
`

const CustomLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

const renderTags = (hit, refine) =>
  TagKeys.map((tag, index) => {
    const value = hit[tag]
    if (value == null) return null
    const onClick = e => refine({ attributeName: tag, value })
    return (
      <Tag my={1} key={index} onClick={onClick} attributeName={tag}>
        {value}
      </Tag>
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
    <Box>
      <Box pt={3} pb={2} px={2}>
        <Flex direction='row'>
          <SecondaryContent>
            <CustomProgressArc
              key={hit.objectID}
              value={hit.priceScore}
              unit=''
              arcColor={priceScoreGradientAt(hit.priceScore)}
              textColor={cx('gray8')}
              dominantBaseline='central'
              rounded
            />
          </SecondaryContent>
          <PrimaryContent>
            <Flex direction='row' justify='space-between' align='flex-start'>
              <Box>
                <Text is='span' bold onClick={onClick}>
                  <Highlight attributeName='provider' hit={hit} />
                </Text>

                <Text is='span' color='gray6' onClick={onClick}>
                  {' '}€{hit.price}
                </Text>

                <Text is='span' color='gray6'>
                  {' · '}
                  <CustomLink color='gray6' href={itemURL} target='blank'>
                    <TimeAgo formatter={formatter} date={hit.timestamp} />
                  </CustomLink>
                </Text>
              </Box>
            </Flex>
            <Box onClick={onClick}>
              <Text>
                <Highlight attributeName='title' hit={hit} />
              </Text>
            </Box>
            <Box mt={2} onClick={onClick}>
              <CustomBackgroundImage src={getImageUrl(hit, 600)} />
            </Box>

            <Box mt={2}>
              {renderTags(hit, refine)}
            </Box>
          </PrimaryContent>
        </Flex>
      </Box>

      <Divider w={1} color='gray2' />
    </Box>
  )
}

HitComponent.propTypes = {
  hit: PropTypes.object
}

export default HitComponent
