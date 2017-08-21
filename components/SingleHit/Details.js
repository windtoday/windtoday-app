import { Avatar, Text, Flex } from 'rebass'

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

const HitDetail = ({ value, ...props }) =>
  <div>
    <Flex py={3} px={4} align='center'>
      <Avatar
        mr={3}
        size={64}
        src='https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'
      />

      <Flex direction='column'>
        <Flex justify='space-between' align='center'>
          <Text is='h3' m={0}>
            {value}
          </Text>
        </Flex>
        <Text f={12} m={0}>
          The sail size is measue for all the size superficie, don't confuse
          with area.
        </Text>
      </Flex>
    </Flex>
  </div>

export default ({ hit }) => {
  const details = DETAILS.map(({ attributeName, title }, index) => {
    const prop = hit[attributeName]
    if (prop) {
      const value = title ? title(prop) : prop
      return <HitDetail key={index} value={value} />
    }
  })

  return (
    details.length > 0 &&
    <div>
      {details}
    </div>
  )
}
