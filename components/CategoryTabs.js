import {connectRefinementList} from 'react-instantsearch/connectors'
import { Tabs, TabItem, Flex } from 'rebass'

import styled from 'styled-components'
import {createProvider} from 'refunk'

const hoc = createProvider({active: 1})
const setActive = n => state => ({active: n})

const CustomTabItem = styled(TabItem)`
text-transform: uppercase;
font-size: 12px;
`

const renderCustomTabItem = ({type, index, active, update, ...props}) => {
  return (
    <CustomTabItem
      active={active === index}
      onClick={e => {
        update(setActive(index))
        index === 1 ? props.refine([]) : props.refine(type)
      }}
    >{type}</CustomTabItem>
  )
}

const CategoryBar = hoc(props =>
  <Tabs>
    <Flex justify='center' mx='auto'>
      {renderCustomTabItem({type: 'all', index: 1, ...props})}
      {renderCustomTabItem({type: 'sails', index: 2, ...props})}
      {renderCustomTabItem({type: 'boards', index: 3, ...props})}
      {renderCustomTabItem({type: 'masts', index: 4, ...props})}
      {renderCustomTabItem({type: 'booms', index: 5, ...props})}
      {renderCustomTabItem({type: 'fins', index: 6, ...props})}
    </Flex>
  </Tabs>
)

export default connectRefinementList(CategoryBar)
