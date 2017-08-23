import { color } from 'styled-system'
import styled from 'styled-components'

export default styled.a`
  ${color} background: ${props =>
      props.primary ? 'linear-gradient(45deg,#19b5fe,#31d0c9)' : props.bg};
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
  border: ${props => (props.primary ? '0' : '1px solid #ccd6dd')};
  box-shadow: ${props =>
    props.primary && '1px 1px 4px rgba(101, 119, 134, .75)'};
`
