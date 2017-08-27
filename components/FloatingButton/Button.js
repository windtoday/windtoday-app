import { color } from 'styled-system'
import styled from 'styled-components'
import { cx } from 'config/theme'

export default styled.a`
  ${color} background: ${props => props.bg};
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  z-index: 20;
  display: inline-block;
  position: relative;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  padding: 0;
  position: relative;
  -webkit-user-drag: none;
  font-weight: bold;
  border: ${props => (props.primary ? '0' : `1px solid ${cx('gray3')}`)};
  box-shadow: ${props => props.primary && `1px 1px 4px ${cx('shadow1')}`};
`
