import { BarChart2, Link, X, Plus, Share2 } from 'react-feather'
import styled, { css } from 'styled-components'
import { color, space } from 'styled-system'
import { createProvider } from 'refunk'
import { Box } from 'rebass'

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
  ${space} position: fixed;
  white-space: nowrap;
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
  ${color} box-shadow: 1px 1px 4px rgba(101,119,134,.75);
  padding: 4px 10px;
  font-size: 13px;
  pointer-events: none;
  position: absolute;
  top: 0;
  right: 100%;
  margin: 10px 7px;
  border: 1px solid #ccd6dd;
  border-radius: .35rem;
`

const PrimaryButton = ({
  size,
  isOpen,
  update,
  iconOpen,
  iconClose,
  ...props
}) => {
  const Icon = styled(!isOpen ? iconClose : iconOpen)`${iconstyle}`
  return (
    <Button size={size} {...props}>
      <Icon onClick={e => update(toggleOpen)} />
    </Button>
  )
}

const SecondaryButton = ({
  size,
  isOpen,
  icon: IconComponent,
  label,
  ...props
}) => {
  const Icon = styled(IconComponent)`${iconstyle}`
  if (!isOpen) return false
  return (
    <Box is='li' pb={2}>
      <Button size={size} {...props}>
        <Icon size={18} />
        <Label {...props}>
          {label}
        </Label>
      </Button>
    </Box>
  )
}

const hoc = createProvider({ isOpen: false })
const toggleOpen = state => ({ isOpen: !state.isOpen })

const FloatingButton = hoc(({ isOpen, update }) =>
  <FloatingButtonWrapper mx={3} my={3}>
    <PrimaryButtonWrapper>
      <PrimaryButton
        size={61}
        isOpen={isOpen}
        update={update}
        iconOpen={X}
        iconClose={Plus}
        color='white'
        bg='blue'
      />
      <SecondaryButtonWrapper>
        <SecondaryButton
          isOpen={isOpen}
          size={46}
          icon={BarChart2}
          color='blue'
          bg='white'
          label='Recent First'
        />
        <SecondaryButton
          isOpen={isOpen}
          size={46}
          icon={Link}
          color='blue'
          bg='white'
          label='Copy as Link'
        />
        <SecondaryButton
          isOpen={isOpen}
          size={46}
          icon={Share2}
          color='blue'
          bg='white'
          label='Share it'
        />
      </SecondaryButtonWrapper>
    </PrimaryButtonWrapper>
  </FloatingButtonWrapper>
)

export default FloatingButton
