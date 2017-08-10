import { connectRefinementList } from 'react-instantsearch/connectors'
import { Tabs, TabItem, Flex } from 'rebass'
import styled from 'styled-components'
import { Component } from 'react'

const CustomTabItem = styled(TabItem)`
text-transform: uppercase;
cursor: pointer;
`

const CategoryBar = class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: 1
    }
  }

  setActive = active => {
    this.setState({ active })
  }

  renderCustomTabItem ({ type, index }) {
    return (
      <CustomTabItem
        fontSize={[1, 2, 2]}
        active={index === this.state.active}
        onClick={e => {
          this.setActive(index)
          index === 1 ? this.props.refine([]) : this.props.refine(type)
        }}
      >
        {type}
      </CustomTabItem>
    )
  }

  render () {
    return (
      <Tabs bg='white' color='gray7'>
        <Flex justify='center' mx='auto'>
          {this.renderCustomTabItem({ type: 'all', index: 1 })}
          {this.renderCustomTabItem({ type: 'sails', index: 2 })}
          {this.renderCustomTabItem({ type: 'boards', index: 3 })}
          {this.renderCustomTabItem({ type: 'masts', index: 4 })}
          {this.renderCustomTabItem({ type: 'booms', index: 5 })}
          {this.renderCustomTabItem({ type: 'fins', index: 6 })}
        </Flex>
      </Tabs>
    )
  }
}

export default connectRefinementList(CategoryBar)
