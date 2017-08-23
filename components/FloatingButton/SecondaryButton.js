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
