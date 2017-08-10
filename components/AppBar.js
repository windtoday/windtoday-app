import { ChevronLeft, Search } from 'react-feather'
import { SearchBox } from 'react-instantsearch/dom'
import { Box, Toolbar, NavLink } from 'rebass'
import { Component } from 'react'
import Logo from './Logo'

const translations = {
  placeholder: 'What are you looking for?'
}

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isSearchOpen: false
    }
  }

  toggle = prop => {
    this.setState({ [prop]: !this.state[prop] })
  }

  render () {
    const { isSearchOpen } = this.state

    return (
      <div>
        <Toolbar color='blue' bg='white' py={2}>
          <NavLink>
            {!isSearchOpen
              ? <Logo />
              : <ChevronLeft onClick={e => this.toggle('isSearchOpen')} />}
          </NavLink>

          <Box mx='auto' fontSize={[1, 1, 1]}>
            {!isSearchOpen
              ? <NavLink fontSize={2} mx='auto' children='WINDTODAY' />
              : <SearchBox translations={translations} autoFocus />}
          </Box>

          {!isSearchOpen &&
            <NavLink>
              <Search onClick={e => this.toggle('isSearchOpen')} />
            </NavLink>}
        </Toolbar>
      </div>
    )
  }
}
