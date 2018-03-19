import { Divider, Text, Box, Flex } from 'rebass'
import Small from 'components/Small'

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

const HitDetail = ({ range, name, value, ...props }) => (
  <Box>
    <Flex
      my={3}
      mx={3}
      style={{ lineHeight: '1.4' }}
      justifyContent='space-between'
    >
      <Box>
        <Small color='gray' fontSize={0} m={0} p={0}>
          {name}
        </Small>
      </Box>

      <Box>
        <Text fontSize={2} fontWeight='normal'>
          {value}
        </Text>
      </Box>
    </Flex>
    <Box mx={3}>
      <Divider borderColor='gray1' />
    </Box>
  </Box>
)

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

  return <Box pb={6}> {details}</Box>
}
