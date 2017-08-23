import styled, { css } from 'styled-components'
import { X } from 'react-feather'
import Button from './Button'

const iconstyle = css`
min-height: 100%;
margin: auto;
display: block;
`

export default ({
  size,
  isOpen,
  toggleOpen,
  icon: IconComponent,
  ...props
}) => {
  const Icon = styled(isOpen ? X : IconComponent)`${iconstyle}`

  return (
    <Button size={size} primary {...props}>
      <Icon onClick={e => toggleOpen()} />
    </Button>
  )
}
