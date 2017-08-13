import styled from 'styled-components'
import { Text, Box, Badge } from 'rebass'
import { Component } from 'react'
import { X } from 'react-feather'

const CustomBadge = styled(Badge)`
display: inline-flex;
justify-content: center;
align-items: center;
border: 2px solid;
border-radius: 1rem;
cursor: pointer;
`

const CustomBox = styled(Box)`
background: rgba(255, 255, 255, 0.7);
position: sticky;
transition: top 200ms ease-in-out;
`

const Filter = ({ attributeName, value, refine, ...props }) => {
  return (
    <CustomBadge mx={1} my={2} px={2} bg='white' color='blue'>
      <Text f={1} mr={1}>
        {value}
      </Text>
      <X size={16} onClick={refine} />
    </CustomBadge>
  )
}

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      offset: '0px'
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = event => {
    const { headroom } = this.props
    const height = headroom ? headroom.state.height : 0
    const className = headroom ? headroom.state.className : ''
    const offset = className === 'headroom headroom--pinned' ? height : 0
    this.setState({ offset: `${offset}px` })
  }

  render () {
    const { tags } = this.props

    return (
      <CustomBox style={{ top: this.state.offset }} mx={2} mt={2} mb={1}>
        {tags.map((tag, index) => <Filter key={index} {...tag} />)}
      </CustomBox>
    )
  }
}
