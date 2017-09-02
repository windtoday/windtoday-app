import { Box, Fixed, Flex, Text } from 'rebass'
import { ExternalLink } from 'react-feather'
import { cx } from 'config/theme'
import hexToRgba from 'util/hex-to-rgba'

const CustomFlex = Flex.extend`
  height: 64px;
  text-decoration: none;
  cursor: pointer;
  background-color: ${cx('cyan')};
  box-shadow: 0 -16px 24px 0 rgba(${hexToRgba(cx('cyan'), 0.2)});
`

export default ({ hit: { link } }) =>
  <Fixed bottom left right>
    <CustomFlex
      is='a'
      color='white'
      justify='center'
      align='center'
      href={link}
      rel='noopener'
      target='_blank'
    >
      <Text mr={2} caps>
        See Product
      </Text>
      <Box style={{ marginTop: '4px' }}>
        <ExternalLink size={20} />
      </Box>
    </CustomFlex>
  </Fixed>
