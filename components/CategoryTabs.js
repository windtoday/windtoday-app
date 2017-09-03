import { connectRefinementList } from 'react-instantsearch/connectors'
import { Tabs, TabItem, Flex } from 'rebass'
import { Component } from 'react'
import { cx } from 'config/theme'

const TABS = ['all', 'sails', 'boards', 'masts', 'booms', 'fins']

const CustomTabs = Tabs.extend`
  box-shadow: 0 8px 16px 0 rgba(0, 2, 5, 0.04),
    inset 0 -1px 0 0 rgba(29, 30, 41, 0.1);
`

const CustomTabItem = TabItem.extend`
  text-transform: uppercase;
  letter-spacing: .02rem;
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
    const { active } = this.state
    const isActive = index === active
    return (
      <CustomTabItem
        key={index}
        caps
        color={cx('cyan')}
        fontSize={[1, 2, 2]}
        active={isActive}
        style={{ fontWeight: isActive ? 'bold' : 'normal' }}
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
      <CustomTabs bg='white' color='gray6'>
        <Flex justify='center' mx='auto'>
          {TABS.map((value, index) =>
            this.renderCustomTabItem({ value, index })
          )}
        </Flex>
      </CustomTabs>
    )
  }
}

export default connectRefinementList(CategoryBar)
