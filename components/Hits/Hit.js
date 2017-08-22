import { Text, Flex, Divider, Box, BackgroundImage } from 'rebass'
import { Highlight } from 'react-instantsearch/dom'
import ProgressArc from 'progress-arc-component'
import { ChevronDown } from 'react-feather'
import styled from 'styled-components'
import TimeAgo from 'react-timeago'
import PropTypes from 'prop-types'
import Link from 'next/link'

import { priceScoreGradientAt } from 'config/theme'
import getImageUrl from 'util/get-image-url'
import Tag, { TagKeys } from '../Tag'

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
border: 1px solid #dce2e4;
border-radius: .35rem;
height: 48vw;
max-height: 312px;
padding: 0;
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

const CustomA = styled.a`
  text-decoration: none;
  cursor: pointer;
`

const HitComponent = ({ hit, refine }) =>
  <Box>
    <Box pt={3} pb={2} px={2}>
      <Flex direction='row'>
        <SecondaryContent>
          <CustomProgressArc
            key={hit.objectID}
            value={hit.priceScore}
            unit=''
            arcColor={priceScoreGradientAt(hit.priceScore)}
            textColor='#3f3f3f'
            rounded
          />
        </SecondaryContent>
        <PrimaryContent>
          <Link href={`/item?id=${hit.objectID}`} prefetch shallow>
            <CustomA id={`${hit.objectID}`}>
              <Flex direction='row' justify='space-between' align='flex-start'>
                <Box>
                  <Text is='span' bold>
                    <Highlight attributeName='provider' hit={hit} />
                  </Text>

                  <Text is='span' color='gray6'>
                    {' · '}
                    €{hit.price}
                  </Text>

                  <Text is='span' color='gray6'>
                    {' · '}
                    <TimeAgo formatter={formatter} date={hit.timestamp} />
                  </Text>
                </Box>
                <Box>
                  <ChevronDown size={20} color='gray' />
                </Box>
              </Flex>
              <Box>
                <Text>
                  <Highlight attributeName='title' hit={hit} />
                </Text>
              </Box>
              <Box mt={2}>
                <CustomBackgroundImage src={getImageUrl(hit, 600)} />
              </Box>
            </CustomA>
          </Link>

          <Box mt={2}>
            {renderTags(hit, refine)}
          </Box>
        </PrimaryContent>
      </Flex>
    </Box>

    <Divider w={1} color='gray1' />
  </Box>

HitComponent.propTypes = {
  hit: PropTypes.object
}

export default HitComponent
