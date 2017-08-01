import Hit from './Hit'
import {Flex} from 'rebass'

import {Hits} from 'react-instantsearch/dom'

export default () =>
  <Hits hitComponent={Hit} style={{width: '100%'}} />
