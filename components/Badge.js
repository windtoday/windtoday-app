import styled from 'styled-components'
import { Badge } from 'rebass'

export default styled(Badge)`
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-transform: ${props => props.caps && 'uppercase'};
  letter-spacing: ${props => props.caps && '.02em'};
  padding: 7px 20px;
  border-radius: 20px;
  font-weight: ${props => (props.caps ? 'bold' : 'normal')}
`
