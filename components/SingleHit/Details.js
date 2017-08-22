import { Text, Flex } from 'rebass'
import styled from 'styled-components'
import { fontSize } from 'styled-system'
import Tag from '../Tag'

const DETAILS = [
  { attributeName: 'priceScore', title: value => `${value} to 100` },
  { attributeName: 'year' },
  { attributeName: 'mast type' },
  { attributeName: 'fin type' },
  { attributeName: 'boom type' },
  { attributeName: 'sail size range' },
  { attributeName: 'board size range' },
  { attributeName: 'mast size range' },
  { attributeName: 'boom size range' },
  { attributeName: 'mast carbon range' }
]

const HitDetail = ({ attributeName, value, ...props }) =>
  <div>
    <Flex py={3} px={3} align='flex-start' direction='column'>
      <Tag mx={0} f={3} attributeName={attributeName} invert>
        {value}
      </Tag>
      <Text f={1} m={0}>
        The sail size is measue for all the size superficie, don't confuse with
        area.
      </Text>
    </Flex>
  </div>

export default ({ hit }) => {
  const details = DETAILS.map(({ attributeName, title }, index) => {
    const prop = hit[attributeName]
    if (prop) {
      const value = title ? title(prop) : prop
      return (
        <HitDetail attributeName={attributeName} key={index} value={value} />
      )
    }
  })

  return (
    details.length > 0 &&
    <div>
      {details}
    </div>
  )
}
