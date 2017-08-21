import { Box, Toolbar, NavLink, Text } from 'rebass'
import { Share, ChevronLeft, Search } from 'react-feather'
import { SearchBox } from 'react-instantsearch/dom'
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
    const { isPopUp } = this.props

    return (
      <div>
        <Toolbar color='cyan' bg='white' py={2}>
          <NavLink>
            {isSearchOpen || isPopUp
              ? <ChevronLeft onClick={e => this.toggle('isSearchOpen')} />
              : <Logo />}
          </NavLink>

          <Box mx='auto' fontSize={[1, 1, 1]}>
            {isSearchOpen
              ? <SearchBox translations={translations} autoFocus />
              : <Text
                  fontSize={2}
                  mx='auto'
                  children={isPopUp ? 'BACK' : 'WINDTODAY'}
                  bold
                />}
          </Box>

          {!isPopUp &&
            !isSearchOpen &&
            <NavLink>
              <Search onClick={e => this.toggle('isSearchOpen')} />
            </NavLink>}
        </Toolbar>
      </div>
    )
  }
}
