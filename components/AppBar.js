import {Menu, Search} from 'react-feather'
import {Fixed, Heading, Drawer, Toolbar, NavLink} from 'rebass'
import {createProvider} from 'refunk'

const hoc = createProvider({open: false})
const toggleDrawer = state => ({open: !state.open})

const AppBar = hoc(({open, update}) =>
  <div>
    {open && <Fixed top right bottom left onClick={e => update(toggleDrawer)} />}

    <Drawer open={open} color='white' bg='gray9'>
      <Heading>Hello</Heading>
    </Drawer>

    <Toolbar py={2}>
      <NavLink>
        <Menu onClick={e => update(toggleDrawer)} />
      </NavLink>

      <NavLink mx='auto' children='WINDTODAY' />

      <NavLink>
        <Search />
      </NavLink>
    </Toolbar>
  </div>
)

export default AppBar
