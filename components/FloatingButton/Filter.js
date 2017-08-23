import { Clock, Award } from 'react-feather'
import { Component } from 'react'
import { Fixed, Flex } from 'rebass'

import SecondaryButtonWrapper from './SecondaryButtonWrapper'
import FloatingButtonWrapper from './FloatingButtonWrapper'
import PrimaryButtonWrapper from './PrimaryButtonWrapper'
import ResponsiveFixed from './ResponsiveFixed'
import SecondaryButton from './SecondaryButton'
import PrimaryButton from './PrimaryButton'

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
      <Fixed
        onClick={this.toggleOpen}
        bg='rgba(255, 255, 255, 0.95)'
        top
        right
        bottom
        left
      >
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
                size={64}
                isOpen={this.state.isOpen}
                toggleOpen={this.toggleOpen}
                icon={this.state.criteriaIcon}
                color='white'
                bg='cyan'
              />
              <SecondaryButtonWrapper>
                <SecondaryButton
                  isOpen={this.state.isOpen}
                  toggleOpen={this.toggleOpen}
                  setCriteriaIcon={this.setCriteriaIcon}
                  size={48}
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
                  size={48}
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
