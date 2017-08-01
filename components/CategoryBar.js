import { Tabs, TabItem, Flex } from 'rebass'

import styled from 'styled-components'

const CustomTabItem = styled(TabItem)`
text-transform: uppercase;
font-size: 12px;
`

export default () =>
  <Tabs>
    <Flex justify='center' mx='auto'>
      <CustomTabItem active>All</CustomTabItem>
      <CustomTabItem>Sails</CustomTabItem>
      <CustomTabItem>Boards</CustomTabItem>
      <CustomTabItem>Fins</CustomTabItem>
      <CustomTabItem>Booms</CustomTabItem>
      <CustomTabItem>Masts</CustomTabItem>
    </Flex>
  </Tabs>
