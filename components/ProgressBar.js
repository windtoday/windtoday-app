import { Label, Box, Flex } from 'rebass'
import { Line } from 'react-progressbar.js'
import { cx, priceScoreGradientAt } from 'config/theme'

const CustomLabel = Label.extend`display: inline;`

export default ({ value, ...props }) =>
  <Flex direction='row' align='center' {...props}>
    <Box w={1}>
      <Line
        progress={value / 100}
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
      <CustomLabel pl={3} m={0} f={0}>
        {value}/100
      </CustomLabel>
    </Box>
  </Flex>
