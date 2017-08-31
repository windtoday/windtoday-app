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
  <Box m={3}>
    <Box mb={2} style={{ lineHeight: '1.4' }}>
      <Tag
        f={0}
        mx={0}
        px={0}
        py={0}
        mt={0}
        mb={1}
        attributeName={range || name}
        invert
        caps
      >
        {name}
      </Tag>
      <Text f={3}>
        {value}
      </Text>
    </Box>

    <Text f={1} mb={4}>
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
    <Box pb={4}>
      {details}
    </Box>
  )
}
