import { connectCurrentRefinements } from 'react-instantsearch/connectors'
import styled from 'styled-components'
import Badge from 'components/Badge'
import { Box } from 'rebass'
import { X } from 'react-feather'
import { Component } from 'react'

const CustomBox = styled(Box)`
  position: sticky;
  transition: top 200ms ease-in-out;
  z-index: 999;
`

const Filter = ({ currentRefinement, refine, ...props }) => {
  const [value] = currentRefinement
  const { attribute } = props

  return (
    <Badge
      my={1}
      mr={2}
      ml={0}
      px={3}
      py={2}
      fontSize={0}
      bg='cyan1'
      color='cyan6'
      letterSpacing='caps'
      fontWeight='bold'
    >
      <span>{value}</span>
      <X
        size={12}
        style={{ strokeWidth: '3', marginLeft: '4px', marginTop: '-2px' }}
        onClick={e => refine({ attribute, value })}
      />
    </Badge>
  )
}

const CurrentRefinements = class extends Component {
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
    const { items, refineFilter } = this.props
    const { offset } = this.state
    const size = items.length
    const px = size ? 3 : 0
    const py = size ? 2 : 0
    const mt = size ? 3 : 0
    const background = size ? 'rgba(247, 247, 247, 0.75)' : 'transparent'

    return (
      <CustomBox style={{ top: offset, background }} px={px} py={py} mt={mt}>
        {items
          .filter(({ attribute }) => attribute !== 'category')
          .map((item, index) => (
            <Filter key={index} refine={refineFilter} {...item} />
          ))}
      </CustomBox>
    )
  }
}

export default connectCurrentRefinements(CurrentRefinements)
