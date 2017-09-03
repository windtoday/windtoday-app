import styled, { css } from 'styled-components'
import { Box } from 'rebass'

import Button from './Button'
import Label from './Label'

const iconstyle = css`
min-height: 100%;
margin: auto;
display: block;
`

export default ({
  size,
  isOpen,
  icon,
  label,
  setIndexName,
  indexName,
  refine,
  toggleOpen,
  setActive,
  value,
  ...props
}) => {
  const Icon = styled(icon)`${iconstyle}`
  if (!isOpen) return false

  const active = { icon, label, value }

  const onClick = e => {
    setActive(active)
    refine(value)
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
