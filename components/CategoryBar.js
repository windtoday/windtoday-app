import { Tabs, TabItem, Flex } from 'rebass'

import styled from 'styled-components'
import {createProvider} from 'refunk'

const hoc = createProvider({active: 1})
const setActive = n => state => ({active: n})

const CustomTabItem = styled(TabItem)`
text-transform: uppercase;
font-size: 12px;
`

const renderCustomTabItem = ({name, index, active, update}) =>
  <CustomTabItem
    active={active === index}
    onClick={e => update(setActive(index))}
  >{name}</CustomTabItem>

export default hoc(props =>
  <Tabs>
    <Flex justify='center' mx='auto'>
      {renderCustomTabItem({name: 'All', index: 1, ...props})}
      {renderCustomTabItem({name: 'Sails', index: 2, ...props})}
      {renderCustomTabItem({name: 'Boards', index: 3, ...props})}
      {renderCustomTabItem({name: 'Masts', index: 4, ...props})}
      {renderCustomTabItem({name: 'Booms', index: 5, ...props})}
      {renderCustomTabItem({name: 'Fins', index: 6, ...props})}
    </Flex>
  </Tabs>
)
