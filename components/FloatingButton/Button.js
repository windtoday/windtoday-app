import { color } from 'styled-system'
import styled from 'styled-components'
import { cx } from 'config/theme'

export default styled.a`
  ${color} pointer-events: auto;
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  z-index: 20;
  display: inline-block;
  position: relative;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  padding: 0;
  position: relative;
  -webkit-user-drag: none;
  font-weight: bold;
  border: ${props => `1px solid ${cx(props.border)}`};
  box-shadow: 0 16px 32px 0 rgba(0, 15, 13, 0.2);
`
