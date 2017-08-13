import { Clock, X, Award } from 'react-feather'
import styled, { css } from 'styled-components'
import { color, space } from 'styled-system'
import { Fixed, Flex, Box } from 'rebass'
import { Component } from 'react'

const Button = styled.a`
  ${color} height: ${props => props.size}px;
  width: ${props => props.size}px;
  z-index: 20;
  display: inline-block;
  position: relative;
  border: none;
  border-radius: 50%;
  box-shadow: 1px 1px 4px rgba(101, 119, 134, .75);
  cursor: pointer;
  outline: none;
  padding: 0;
  position: relative;
  -webkit-user-drag: none;
  font-weight: bold;
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
  pointer-events: none;
  position: absolute;
  top: 0;
  right: 100%;
  margin: 10px 7px;
  border: 1px solid #ccd6dd;
  border-radius: .35rem;
  text-transform: uppercase;
  letter-spacing: .1em;
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
    <Button size={size} {...props}>
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
  return (
    <Box is='li' pb={3}>
      <Button size={size} {...props}>
        <Icon
          size={18}
          onClick={e => {
            setIndexName(indexName)
            setCriteriaIcon(Icon)
            toggleOpen()
          }}
        />
        <Label {...props}>
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
      <Fixed right bottom left>
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
                bg='blue'
              />
              <SecondaryButtonWrapper>
                <SecondaryButton
                  isOpen={this.state.isOpen}
                  toggleOpen={this.toggleOpen}
                  setCriteriaIcon={this.setCriteriaIcon}
                  size={42}
                  icon={Clock}
                  color='blue'
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
                  color='blue'
                  bg='white'
                  label='Price Score'
                  indexName={'windsurf'}
                  setIndexName={this.props.setIndexName}
                />
              </SecondaryButtonWrapper>
            </PrimaryButtonWrapper>
          </FloatingButtonWrapper>
        </Flex>
      </Fixed>
    )
  }

  render () {
    return !this.state.isOpen
      ? this.renderFloatingButtons()
      : this.renderOverlayFloatingButtons()
  }
}
