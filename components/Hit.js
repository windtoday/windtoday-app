import { Text, Flex, Divider, Box, BackgroundImage } from 'rebass'
import { Highlight } from 'react-instantsearch/dom'
import ProgressArc from 'progress-arc-component'
import getImageUrl from 'util/get-image-url'
import { ChevronDown } from 'react-feather'
import ColourMeLife from 'colour-me-life'
import styled from 'styled-components'
import TimeAgo from 'react-timeago'
import PropTypes from 'prop-types'
import Tag from './Tag'

const formatter = (value, unit, suffix) => {
  if (value !== 1) unit += 's'
  return `${value}${unit.charAt(0)}`
}

const gradient = new ColourMeLife()
  .setSpectrum('#6e4b46', '#9e6b64', '#1ac391')
  .setNumberRange(0, 100)

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
const getColor = value => `#${gradient.colourAt(value)}`

const HitComponent = ({ hit, addTag, removeTag }) =>
  <Box>
    <Box pt={3} pb={2} px={2}>
      <Flex direction='row'>
        <SecondaryContent>
          <CustomProgressArc
            value={hit.priceScore}
            unit=''
            arcColor={getColor(hit.priceScore)}
            textColor='#3f3f3f'
            rounded
          />
        </SecondaryContent>
        <PrimaryContent>
          <Flex direction='row' justify='space-between' align='flex-start'>
            <Box>
              <Text is='span' bold>
                <Highlight attributeName='provider' hit={hit} />
              </Text>
              {' · '}
              <Text is='span' color='gray7'>
                €{hit.price}
              </Text>
              {' · '}
              <Text is='span' color='gray7'>
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
          <Box mt={2}>
            <Tag
              bg='blue4'
              addTag={addTag}
              removeTag={removeTag}
              attributeName='brand'
              hit={hit}
            />
            <Tag
              bg='blue4'
              addTag={addTag}
              removeTag={removeTag}
              attributeName='model'
              hit={hit}
            />
            <Tag
              bg='blue4'
              addTag={addTag}
              removeTag={removeTag}
              attributeName='condition'
              hit={hit}
            />
            <Tag
              bg='red'
              addTag={addTag}
              removeTag={removeTag}
              attributeName='mast type'
              hit={hit}
            />
            <Tag
              bg='green'
              addTag={addTag}
              removeTag={removeTag}
              attributeName='fin type'
              hit={hit}
            />
            <Tag
              bg='yellow'
              addTag={addTag}
              removeTag={removeTag}
              attributeName='boom type'
              hit={hit}
            />
            <Tag
              bg='blue4'
              addTag={addTag}
              removeTag={removeTag}
              attributeName='sail size range'
              hit={hit}
            />
            <Tag
              bg='blue4'
              addTag={addTag}
              removeTag={removeTag}
              attributeName='board size range'
              hit={hit}
            />
            <Tag
              bg='blue4'
              addTag={addTag}
              removeTag={removeTag}
              attributeName='mast size range'
              hit={hit}
            />
            <Tag
              bg='blue4'
              addTag={addTag}
              removeTag={removeTag}
              attributeName='mast carbon range'
              hit={hit}
            />
            <Tag
              bg='blue4'
              addTag={addTag}
              removeTag={removeTag}
              attributeName='boom size range'
              hit={hit}
            />
          </Box>
        </PrimaryContent>
      </Flex>
    </Box>

    <Divider w={1} color='gray2' />
  </Box>

HitComponent.propTypes = {
  hit: PropTypes.object
}

export default HitComponent
