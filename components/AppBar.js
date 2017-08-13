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
    const { query } = props.searchState

    const isSearchOpen = query ? query !== '' : false
    this.state = { isSearchOpen }
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
            {isSearchOpen
              ? <ChevronLeft onClick={e => this.toggle('isSearchOpen')} />
              : <Logo />}
          </NavLink>

          <Box mx='auto' fontSize={[1, 1, 1]}>
            {isSearchOpen
              ? <SearchBox translations={translations} autoFocus />
              : <NavLink fontSize={2} mx='auto' children='WINDTODAY' />}
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
