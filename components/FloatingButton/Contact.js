import { Phone, Share2, ExternalLink } from 'react-feather'
import { connectHits } from 'react-instantsearch/connectors'
import { Fixed, Flex } from 'rebass'
import { Component } from 'react'

import SecondaryButtonWrapper from './SecondaryButtonWrapper'
import FloatingButtonWrapper from './FloatingButtonWrapper'
import PrimaryButtonWrapper from './PrimaryButtonWrapper'
import ResponsiveFixed from './ResponsiveFixed'
import SecondaryButton from './SecondaryButton'
import PrimaryButton from './PrimaryButton'
import Shop from '../Icon/Shop'

const FloatingContactButton = class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  renderOverlayFloatingButtons () {
    return (
      <Fixed
        onClick={this.toggleOpen}
        bg='rgba(255, 255, 255, 0.98)'
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
    const { hit: { link } } = this.props

    return (
      <ResponsiveFixed right bottom left>
        <Flex justify='flex-end'>
          <FloatingButtonWrapper mx={3} my={3}>
            <PrimaryButtonWrapper>
              <PrimaryButton
                size={64}
                isOpen={this.state.isOpen}
                toggleOpen={this.toggleOpen}
                icon={Shop}
                color='white'
                bg='cyan'
              />
              <SecondaryButtonWrapper>
                <SecondaryButton
                  isOpen={this.state.isOpen}
                  toggleOpen={this.toggleOpen}
                  size={48}
                  icon={ExternalLink}
                  color='cyan'
                  bg='white'
                  label='Go to Shop'
                  href={link}
                  target='_blank'
                />
                <SecondaryButton
                  isOpen={this.state.isOpen}
                  toggleOpen={this.toggleOpen}
                  size={48}
                  icon={Phone}
                  color='cyan'
                  bg='white'
                  label='Call to Shop'
                  href={link}
                  target='_blank'
                />
                <SecondaryButton
                  isOpen={this.state.isOpen}
                  toggleOpen={this.toggleOpen}
                  size={48}
                  icon={Share2}
                  color='cyan'
                  bg='white'
                  label='Share Link'
                  href={link}
                  target='_blank'
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

const CustomHits = ({ hits, ...props }) => {
  const [hit] = hits
  return <FloatingContactButton hit={hit} {...props} />
}

export default connectHits(CustomHits)
