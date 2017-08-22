import { Box, Toolbar, NavLink, Text } from 'rebass'
import { ChevronLeft, Search } from 'react-feather'
import { SearchBox } from 'react-instantsearch/dom'
import { Component } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Logo from './Logo'

const CustomA = styled.a`
  text-decoration: none;
  cursor: pointer;
`

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

  renderPopUpLeftIcon () {
    const { currentItem } = this.props

    return (
      <Link href={`/#${currentItem}`} prefetch>
        <NavLink>
          <ChevronLeft />
        </NavLink>
      </Link>
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
    const { currentItem } = this.props

    return (
      <div>
        <Toolbar color='cyan' bg='white' py={2}>
          {currentItem ? this.renderPopUpLeftIcon() : this.renderLeftIcon()}

          <Box mx='auto' fontSize={[1, 1, 1]}>
            {isSearchOpen
              ? <SearchBox translations={translations} autoFocus />
              : <Text
                  fontSize={2}
                  mx='auto'
                  children={currentItem ? 'BACK' : 'WINDTODAY'}
                  bold
                />}
          </Box>

          {!currentItem &&
            !isSearchOpen &&
            <NavLink>
              <Search onClick={e => this.toggle('isSearchOpen')} />
            </NavLink>}
        </Toolbar>
      </div>
    )
  }
}
