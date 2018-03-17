import styled from 'styled-components'
import { Fixed } from 'rebass'

export default styled(Fixed)`
  pointer-events: none;
  backface-visibility: hidden;

  @media screen and (min-width: 600px) {
    max-width: 800px;
    margin: 0 auto;
  }
`
