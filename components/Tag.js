import styled, { css } from 'styled-components'
import { createElement } from 'react'
import PropTypes from 'prop-types'
import { Badge } from 'rebass'

import hexToRgba from 'util/hex-to-rgba'
import { cx } from 'config/theme'

const normalStyle = css`
border-radius: 1rem;
padding-right: 12px;
padding-left: 12px;
box-shadow: 0 0px 3px 1px rgba(${props => hexToRgba(cx(props.bg), 0.3)});
`

const CustomBadge = styled(Badge)`
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-transform: ${props => props.caps && 'uppercase'};
  letter-spacing: ${props => props.caps && '.02em'};
`

const colorSchema = {
  brand: 'blue',
  model: 'indigo',
  condition: 'violet',
  year: 'fuschia',
  modality: 'pink',
  'mast type': 'red',
  'fin type': 'red',
  'boom type': 'red',
  'sail size range': 'orange',
  'board size range': 'orange',
  'mast size range': 'orange',
  'boom size range': 'orange',
  'mast carbon range': 'yellow'
}

const Tag = ({ attributeName, invert, ...props }) => {
  const color = colorSchema[attributeName]
  const CustomTag = invert ? CustomBadge : styled(CustomBadge)`${normalStyle}`
  const colorProp = { [invert ? 'color' : 'bg']: color }
  const customProps = Object.assign({ bg: 'transparent' }, colorProp, props)
  return createElement(CustomTag, customProps)
}

Tag.propTypes = {
  attributeName: PropTypes.string.isRequired
}

export default Tag
export const TagKeys = Object.keys(colorSchema)
