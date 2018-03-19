import { Small } from 'rebass'
import styled from 'styled-components'

export default styled(Small)`
  text-transform: ${props => props.textTransform || 'uppercase'};
`
