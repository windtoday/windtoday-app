import { connectSortBy } from 'react-instantsearch/connectors'
import { Fixed, Flex } from 'rebass'
import { Component } from 'react'

import SecondaryButtonWrapper from './SecondaryButtonWrapper'
import FloatingButtonWrapper from './FloatingButtonWrapper'
import PrimaryButtonWrapper from './PrimaryButtonWrapper'
import ResponsiveFixed from './ResponsiveFixed'
import SecondaryButton from './SecondaryButton'
import PrimaryButton from './PrimaryButton'
import { gradient } from 'config/theme'

const FloatingFilterButton = class extends Component {
  constructor (props) {
    super(props)

    const { items, defaultRefinement } = this.props
    const item = items.find(({ value }) => value === defaultRefinement)

    this.state = {
      isOpen: false,
      active: item
    }
  }

  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  setActive = active => {
    this.setState({ active })
  }

  renderOverlayFloatingButtons () {
    return (
      <Fixed onClick={this.toggleOpen} bg='white95' top right bottom left>
        {this.renderFloatingButtons()}
      </Fixed>
    )
  }

  renderFloatingButtons () {
    const { isOpen, active } = this.state
    const { items, refine } = this.props

    return (
      <ResponsiveFixed right bottom left>
        <Flex justify='flex-end'>
          <FloatingButtonWrapper mx={3} my={3}>
            <PrimaryButtonWrapper>
              <PrimaryButton
                size={64}
                isOpen={isOpen}
                toggleOpen={this.toggleOpen}
                icon={active.icon}
                color={isOpen ? 'white' : 'cyan'}
                bg={isOpen ? gradient(45, 'cyan5', '#31d0c9') : 'white'}
              />

              <SecondaryButtonWrapper>
                {items.map(({ icon, value, label }, index) =>
                  <SecondaryButton
                    size={48}
                    key={index}
                    value={value}
                    label={label}
                    isOpen={isOpen}
                    toggleOpen={this.toggleOpen}
                    icon={icon}
                    color='cyan'
                    bg='white'
                    refine={refine}
                    setActive={this.setActive}
                  />
                )}
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

export default connectSortBy(FloatingFilterButton)
