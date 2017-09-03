import { Divider, Text, Box, Flex } from 'rebass'
import SmallCaps from 'components/SmallCaps'

const DETAILS = [
  { nameProp: 'model' },
  { nameProp: 'modality' },
  { nameProp: 'mast type' },
  { nameProp: 'fin type' },
  { nameProp: 'boom type' },
  { nameProp: 'sail size', rangeProp: 'sail size range', unit: 'metres' },
  { nameProp: 'board size', rangeProp: 'board size range', unit: ' litres' },
  { nameProp: 'mast size', rangeProp: 'mast size range', unit: 'cm' },
  { nameProp: 'boom size', rangeProp: 'boom size range', unit: 'cm' },
  { nameProp: 'mast carbon', rangeProp: 'mast carbon range', unit: 'C' }
]

const HitDetail = ({ range, name, value, ...props }) =>
  <Box>
    <Flex my={3} mx={3} style={{ lineHeight: '1.4' }} justify='space-between'>
      <Box>
        <SmallCaps color='gray' f={0} m={0} p={0}>
          {name}
        </SmallCaps>
      </Box>

      <Box>
        <Text f={2} bold>
          {value}
        </Text>
      </Box>
    </Flex>
    <Box mx={3}>
      <Divider w={1} color='#f7f7f7' />
    </Box>
  </Box>

export default ({ hit }) => {
  const details = DETAILS.map(({ nameProp, rangeProp, unit = '' }, index) => {
    const existProp = hit[nameProp]

    if (existProp) {
      const name = hit[nameProp]
      const range = rangeProp && hit[rangeProp]
      const value = range ? `${name}${unit} (${range})` : `${name}${unit}`
      return (
        <HitDetail
          key={index}
          range={rangeProp}
          name={nameProp}
          value={value}
        />
      )
    }
  })

  return (
    <Box pb={6}>
      {' '}{details}
    </Box>
  )
}
