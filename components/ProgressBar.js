import { Label, Box, Flex } from 'rebass'
import { Line } from 'react-progress-bar.js'
import { cx, priceScoreGradientAt } from 'config/theme'

const CustomLabel = Label.extend`
  display: inline;
`

export default ({ value, ...props }) => (
  <Flex flexDirection='row' alignContent='center' {...props}>
    <Box width={1}>
      <Line
        progress={value / 100}
        containerStyle={{ width: '100%' }}
        options={{
          strokeWidth: 3,
          easing: 'easeOut',
          duration: 1400,
          trailColor: cx('gray1'),
          svgStyle: { borderRadius: '12px' },
          step: (state, bar) => {
            const step = 100 - state.offset
            bar.path.setAttribute('stroke', priceScoreGradientAt(step || 0))
          }
        }}
        initialAnimate
      />
    </Box>
    <Box>
      <CustomLabel pl={2} m={0} fontSize={0}>
        {value}/100
      </CustomLabel>
    </Box>
  </Flex>
)
