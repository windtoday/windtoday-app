import { connectRefinementList } from 'react-instantsearch/connectors'
import { Tabs, TabItem, Flex } from 'rebass'
import { Component } from 'react'

const TABS = ['all', 'sails', 'boards', 'masts', 'booms', 'fins']

const CustomTabItem = TabItem.extend`
  text-transform: uppercase;
  cursor: pointer;
  color: ${props => (props.active ? props.color : 'inherit')};
  &:hover {
    color: ${props => props.color};
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

  renderCustomTabItem ({ value, index }) {
    return (
      <CustomTabItem
        key={index}
        color='#01bef2'
        fontSize={[1, 2, 2]}
        active={index === this.state.active}
        onClick={e => {
          this.setActive(index)
          index === 0 ? this.props.refine([]) : this.props.refine(value)
        }}
      >
        {value}
      </CustomTabItem>
    )
  }

  render () {
    return (
      <Tabs bg='white' color='gray7'>
        <Flex justify='center' mx='auto'>
          {TABS.map((value, index) =>
            this.renderCustomTabItem({ value, index })
          )}
        </Flex>
      </Tabs>
    )
  }
}

export default connectRefinementList(CategoryBar)
