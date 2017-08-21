import { Clock, X, Award } from 'react-feather'
import styled, { css } from 'styled-components'
import { color, space } from 'styled-system'
import { Fixed, Flex, Box } from 'rebass'
import { Component } from 'react'

const ResponsiveFixed = styled(Fixed)`
@media screen and (min-width: 600px) {
  max-width: 800px;
  margin: 0 auto;
}
`

const Button = styled.a`
  ${color} height: ${props => props.size}px;
  width: ${props => props.size}px;
  z-index: 20;
  display: inline-block;
  position: relative;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  padding: 0;
  position: relative;
  -webkit-user-drag: none;
  font-weight: bold;
  border: ${props => (props.primary ? '0' : '1px solid #ccd6dd')};
  box-shadow: ${props =>
    props.primary
      ? '1px 1px 4px rgba(101, 119, 134, .75)'
      : '1px 1px 4px -1px rgba(101,119,134,.75)'};
`
const FloatingButtonWrapper = styled.ul`
  ${space} white-space: nowrap;
  z-index: 2147483647;
  list-style: none;
  padding: 0;
  right: 0;
  bottom: 0;
`
const PrimaryButtonWrapper = styled.li`
  padding: 25px;
  margin: -25px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`
const SecondaryButtonWrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`
const iconstyle = css`
min-height: 100%;
margin: auto;
display: block;
`
const Label = styled.label`
  ${color} padding: 4px 10px;
  font-size: 12px;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 100%;
  margin: 6px 7px;
  border: 1px solid #ccd6dd;
  border-radius: .35rem;
  text-transform: uppercase;
  letter-spacing: .1em;
  box-shadow: 1px 1px 4px -1px rgba(101, 119, 134, .75);
`
const PrimaryButton = ({
  size,
  isOpen,
  toggleOpen,
  iconOpen,
  iconClose,
  ...props
}) => {
  const Icon = styled(!isOpen ? iconClose : iconOpen)`${iconstyle}`
  return (
    <Button size={size} primary {...props}>
      <Icon onClick={e => toggleOpen()} />
    </Button>
  )
}

const SecondaryButton = ({
  size,
  isOpen,
  icon: IconComponent,
  label,
  setIndexName,
  indexName,
  toggleOpen,
  setCriteriaIcon,
  ...props
}) => {
  const Icon = styled(IconComponent)`${iconstyle}`
  if (!isOpen) return false

  const onClick = e => {
    setIndexName(indexName)
    setCriteriaIcon(Icon)
    toggleOpen()
  }

  return (
    <Box is='li' pb={3}>
      <Button size={size} {...props}>
        <Icon size={18} onClick={onClick} />
        <Label onClick={onClick} {...props}>
          {label}
        </Label>
      </Button>
    </Box>
  )
}

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false,
      criteriaIcon: Award
    }
  }

  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  setCriteriaIcon = criteriaIcon => {
    this.setState({ criteriaIcon })
  }

  renderOverlayFloatingButtons () {
    return (
      <Fixed bg='rgba(255, 255, 255, 0.85)' top right bottom left>
        {this.renderFloatingButtons()}
      </Fixed>
    )
  }

  renderFloatingButtons () {
    return (
      <ResponsiveFixed right bottom left>
        <Flex justify='flex-end'>
          <FloatingButtonWrapper mx={3} my={3}>
            <PrimaryButtonWrapper>
              <PrimaryButton
                size={61}
                isOpen={this.state.isOpen}
                toggleOpen={this.toggleOpen}
                iconOpen={X}
                iconClose={this.state.criteriaIcon}
                color='white'
                bg='cyan'
              />
              <SecondaryButtonWrapper>
                <SecondaryButton
                  isOpen={this.state.isOpen}
                  toggleOpen={this.toggleOpen}
                  setCriteriaIcon={this.setCriteriaIcon}
                  size={42}
                  icon={Clock}
                  color='cyan'
                  bg='white'
                  label='Recent'
                  indexName={'sort_by_timestamp'}
                  setIndexName={this.props.setIndexName}
                />
                <SecondaryButton
                  isOpen={this.state.isOpen}
                  toggleOpen={this.toggleOpen}
                  setCriteriaIcon={this.setCriteriaIcon}
                  size={42}
                  icon={Award}
                  color='cyan'
                  bg='white'
                  label='Price Score'
                  indexName={'windsurf'}
                  setIndexName={this.props.setIndexName}
                />
              </SecondaryButtonWrapper>
            </PrimaryButtonWrapper>
          </FloatingButtonWrapper>
        </Flex>
      </ResponsiveFixed>
    )
  }

  render () {
    return !this.state.isOpen
      ? this.renderFloatingButtons()
      : this.renderOverlayFloatingButtons()
  }
}
