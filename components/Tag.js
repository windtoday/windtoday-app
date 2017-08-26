import PropTypes from 'prop-types'
import { createElement } from 'react'
import styled, { css } from 'styled-components'
import { Badge } from 'rebass'

const normalStyle = css`
border-radius: 1rem;
padding-right: 8px;
padding-left: 8px;
`

const CustomBadge = Badge.extend`
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
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
  const CustomTag = invert ? CustomBadge : styled(CustomBadge)`${normalStyle}`
  const color = colorSchema[attributeName]
  const colorProp = { [invert ? 'color' : 'bg']: color }
  const customProps = Object.assign({ bg: 'transparent' }, colorProp, props)
  return createElement(CustomTag, customProps)
}

Tag.propTypes = {
  attributeName: PropTypes.string.isRequired
}

export default Tag
export const TagKeys = Object.keys(colorSchema)
