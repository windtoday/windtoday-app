import { Text, Box } from 'rebass'
import Tag from '../Tag'

const DETAILS = [
  { nameProp: 'year' },
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
  <Box mx={3} mb={4}>
    <Text f={4}>
      {value}
    </Text>
    <Tag
      f={1}
      mx={0}
      px={0}
      py={0}
      mt={0}
      mb={3}
      attributeName={range || name}
      invert
    >
      {name}
    </Tag>
    <Text f={1}>
      The sail size is measue for all the size superficie, don't confuse with
      area.
    </Text>
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
    details.length > 0 &&
    <Box>
      {details}
    </Box>
  )
}
