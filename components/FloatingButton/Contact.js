import { ExternalLink } from 'react-feather'
import { Flex } from 'rebass'

import FloatingButtonWrapper from './FloatingButtonWrapper'
import PrimaryButtonWrapper from './PrimaryButtonWrapper'
import ResponsiveFixed from './ResponsiveFixed'
import PrimaryButton from './PrimaryButton'

export default props => {
  const { hit: { link } } = props

  return (
    <ResponsiveFixed right bottom left>
      <Flex justify='flex-end'>
        <FloatingButtonWrapper mx={3} my={3}>
          <PrimaryButtonWrapper>
            <PrimaryButton
              size={64}
              icon={ExternalLink}
              color='white'
              border='#00db9d'
              bg='#00db9d'
              href={link}
              target='_blank'
            />
          </PrimaryButtonWrapper>
        </FloatingButtonWrapper>
      </Flex>
    </ResponsiveFixed>
  )
}
