import styled from 'styled-components'
import { color } from 'styled-system'
import { cx } from 'config/theme'

export default styled.label`
  ${color} padding: 4px 10px;
  font-size: 12px;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 100%;
  margin: 8px 7px;
  border: 1px solid ${props => cx(props.color)};
  box-shadow: ${props => `1px 1px 4px ${cx('shadow1')}`};
  border-radius: .35rem;
  text-transform: uppercase;
  letter-spacing: .1em;
`
