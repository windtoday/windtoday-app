import {
  Toolbar,
  NavLink
} from 'rebass'

import { Menu, Search } from 'react-feather'

export default () =>
  <Toolbar py={2}>
    <NavLink>
      <Menu />
    </NavLink>

    <NavLink
      mx='auto'
      children='WINDTODAY'
    />

    <NavLink>
      <Search />
    </NavLink>
  </Toolbar>
