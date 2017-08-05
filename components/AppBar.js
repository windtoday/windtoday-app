import { Box, Fixed, Heading, Drawer, Toolbar, NavLink } from 'rebass'
import { SearchBox } from 'react-instantsearch/dom'
import { Menu, Search, X } from 'react-feather'
import { createProvider } from 'refunk'
import { createElement } from 'react'

const hoc = createProvider({ isDrawerOpen: false, isSearchOpen: false })
const toggleDrawer = state => ({ isDrawerOpen: !state.isDrawerOpen })
const toggleSearch = state => ({ isSearchOpen: !state.isSearchOpen })

const translations = {
  placeholder: 'What are you looking for?'
}

const AppBar = hoc(({ isDrawerOpen, isSearchOpen, update }) =>
  <div>
    {isDrawerOpen &&
      <Fixed top right bottom left onClick={e => update(toggleDrawer)} />}

    <Drawer open={isDrawerOpen} color='white' bg='gray9'>
      <Heading>Hello</Heading>
    </Drawer>

    <Toolbar color='blue' bg='white' py={2}>
      <NavLink>
        <Menu onClick={e => update(toggleDrawer)} />
      </NavLink>

      <Box mx='auto' fontSize={[1, 2, 2]}>
        {!isSearchOpen
          ? <NavLink fontSize={[1, 2, 2]} mx='auto' children='WINDTODAY' />
          : <SearchBox translations={translations} autoFocus />}
      </Box>

      <NavLink>
        {createElement(!isSearchOpen ? Search : X, {
          onClick: e => update(toggleSearch)
        })}
      </NavLink>
    </Toolbar>
  </div>
)

export default AppBar
