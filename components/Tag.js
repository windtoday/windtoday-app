import PropTypes from 'prop-types'
import { createElement } from 'react'
import { Badge } from 'rebass'

const CustomBadge = Badge.extend`
  border-radius: ${props => (!props.invert ? '1' : '0')}rem;
  padding-right: ${props => (!props.invert ? '8' : '0')}px;
  padding-left: ${props => (!props.invert ? '8' : '0')}px;
  cursor: pointer;

  display: inline-flex;
  justify-content: center;
  align-items: center;
`

const colorSchema = {
  brand: 'blue',
  model: 'indigo',
  condition: 'violet',
  'mast type': 'fuschia',
  'fin type': 'fuschia',
  'boom type': 'fuschia',
  'sail size range': 'pink',
  'board size range': 'pink',
  'mast size range': 'pink',
  'boom size range': 'pink',
  'mast carbon range': 'red'
}

const Tag = ({ attributeName, ...props }) => {
  const color = colorSchema[attributeName]
  const colorProp = { [props.invert ? 'color' : 'bg']: color }
  const customProps = Object.assign({ bg: 'transparent' }, colorProp, props)
  return createElement(CustomBadge, customProps)
}

Tag.propTypes = {
  attributeName: PropTypes.string.isRequired
}

export default Tag
export const TagKeys = Object.keys(colorSchema)
