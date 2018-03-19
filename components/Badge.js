import { Badge } from 'rebass'
import { fontWeight } from 'styled-system'

export default Badge.extend`
  ${fontWeight} text-transform: ${props => props.textTransform || 'uppercase'};
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`
