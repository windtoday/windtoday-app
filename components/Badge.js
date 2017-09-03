import { Badge } from 'rebass'

export default Badge.extend`
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-transform: ${props => props.caps && 'uppercase'};
  letter-spacing: ${props => props.caps && '.02em'};
  border-radius: 20px;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
`
