import { connectRefinementList } from 'react-instantsearch/connectors'
import styled from 'styled-components'
import { Tabs, Tab, Flex } from 'rebass'
import { Component } from 'react'
import { colors } from 'config/theme'
import { color } from 'styled-system'

const TABS = ['all', 'sails', 'boards', 'masts', 'booms', 'fins']

const CustomTabs = styled(Tabs)`
  border: 0;
  box-shadow: rgba(0, 0, 0, 0.027) 0px 2px 0px 0px;
`

const CustomTab = styled(Tab)`
  ${color} text-transform: uppercase;
  letter-spacing: 0.02rem;
  cursor: pointer;
  &:hover {
    color: ${colors.cyan};
  }
`

const CategoryBar = class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: 0
    }
  }

  setActive = active => {
    this.setState({ active })
  }

  renderCustomTab ({ value, index }) {
    const { active } = this.state
    const isActive = index === active
    return (
      <CustomTab
        key={index}
        color={isActive ? 'cyan' : 'gray6'}
        fontSize={[1, 2, 2]}
        fontWeight={isActive ? 'bold' : 'normal'}
        borderColor={isActive ? 'cyan' : 'transparent'}
        onClick={e => {
          this.setActive(index)
          index === 0 ? this.props.refine([]) : this.props.refine(value)
        }}
      >
        {value}
      </CustomTab>
    )
  }

  render () {
    return (
      <CustomTabs bg='white' color='gray6'>
        <Flex justifyContent='center' mx='auto'>
          {TABS.map((value, index) => this.renderCustomTab({ value, index }))}
        </Flex>
      </CustomTabs>
    )
  }
}

export default connectRefinementList(CategoryBar)
