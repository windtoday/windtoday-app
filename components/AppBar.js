import { ChevronLeft, Search } from 'react-feather'
import { SearchBox } from 'react-instantsearch/dom'
import { Box, Toolbar, NavLink } from 'rebass'
import { createProvider } from 'refunk'
import Logo from './Logo'

const hoc = createProvider({ isSearchOpen: false })
const toggle = prop => state => ({ [prop]: !state[prop] })

const translations = {
  placeholder: 'What are you looking for?'
}

const AppBar = hoc(({ isDrawerOpen, isSearchOpen, update }) =>
  <div>
    <Toolbar color='blue' bg='white' py={2}>
      <NavLink>
        {!isSearchOpen
          ? <Logo />
          : <ChevronLeft onClick={e => update(toggle('isSearchOpen'))} />}
      </NavLink>

      <Box mx='auto' fontSize={[1, 1, 1]}>
        {!isSearchOpen
          ? <NavLink fontSize={2} mx='auto' children='WINDTODAY' />
          : <SearchBox translations={translations} autoFocus />}
      </Box>

      {!isSearchOpen &&
        <NavLink>
          <Search onClick={e => update(toggle('isSearchOpen'))} />
        </NavLink>}
    </Toolbar>
  </div>
)

export default AppBar
