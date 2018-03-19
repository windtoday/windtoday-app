import { Box, Fixed, Flex, Text } from 'rebass'
import { ExternalLink } from 'react-feather'
import { cx } from 'config/theme'
import hexToRgba from 'util/hex-to-rgba'
import { letterSpacing } from 'styled-system'

const CustomFlex = Flex.extend`
  height: 64px;
  text-decoration: none;
  cursor: pointer;
  background-color: ${cx('cyan')};
  box-shadow: 0 -16px 24px 0 rgba(${hexToRgba(cx('cyan'), 0.2)});
`

const CustomText = Text.extend`
  ${letterSpacing};
`

export default ({ hit: { link } }) => (
  <Fixed bottom={0} left={0} right={0}>
    <CustomFlex
      is='a'
      color='white'
      justifyContent='center'
      alignItems='center'
      href={link}
      rel='noopener'
      target='_blank'
    >
      <CustomText
        mr={2}
        letterSpacing='caps'
        style={{ textTransform: 'uppercase' }}
      >
        See Product
      </CustomText>
      <Box style={{ marginTop: '4px' }}>
        <ExternalLink size={20} />
      </Box>
    </CustomFlex>
  </Fixed>
)
