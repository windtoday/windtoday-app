import { Box, Toolbar, NavLink, Text } from 'rebass'
import { ChevronLeft, Search } from 'react-feather'
import { SearchBox } from 'react-instantsearch/dom'
import { Component } from 'react'
import Logo from './Logo'

const translations = {
  placeholder: 'What are you looking for?'
}

export default class extends Component {
  constructor (props) {
    super(props)

    const { searchState = {} } = this.props
    const { query = '' } = searchState
    const isSearchOpen = query !== ''

    this.state = { isSearchOpen }
  }

  toggle = prop => {
    this.setState({ [prop]: !this.state[prop] })
  }

  renderPopUpLeftIcon () {
    return (
      <NavLink onClick={e => window.history.back()}>
        <ChevronLeft />
      </NavLink>
    )
  }

  renderLeftIcon () {
    const { isSearchOpen } = this.state
    return (
      <NavLink>
        {isSearchOpen
          ? <ChevronLeft onClick={e => this.toggle('isSearchOpen')} />
          : <Logo />}
      </NavLink>
    )
  }

  render () {
    const { isSearchOpen } = this.state
    const { hit } = this.props

    return (
      <div>
        <Toolbar color='cyan' bg='white' py={2}>
          {hit ? this.renderPopUpLeftIcon() : this.renderLeftIcon()}

          <Box mx='auto' fontSize={[1, 1, 1]}>
            {isSearchOpen
              ? <SearchBox translations={translations} autoFocus />
              : <Text
                  fontSize={2}
                  mx='auto'
                  children={hit ? 'BACK' : 'WINDTODAY'}
                  bold
                />}
          </Box>

          {!hit &&
            !isSearchOpen &&
            <NavLink>
              <Search onClick={e => this.toggle('isSearchOpen')} />
            </NavLink>}
        </Toolbar>
      </div>
    )
  }
}
