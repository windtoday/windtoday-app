/* eslint-disable react/jsx-indent-props */

import { Box, Flex, Toolbar, NavLink, Text } from 'rebass'
import { ChevronLeft, Search } from 'react-feather'
import { SearchBox } from 'react-instantsearch/dom'
import { Component } from 'react'
import Logo from './Logo'

import { connectCurrentRefinements } from 'react-instantsearch/connectors'

const translations = {
  placeholder: 'What are you looking for?'
}

const LogoClearAll = connectCurrentRefinements(({ items, refine }) => {
  const onClick = e => {
    refine(items)
    window.scrollTo(0, 0)
  }

  return <Logo onClick={onClick} />
})

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
        {isSearchOpen ? (
          <ChevronLeft onClick={e => this.toggle('isSearchOpen')} />
        ) : (
          <LogoClearAll />
        )}
      </NavLink>
    )
  }

  render () {
    const { isSearchOpen } = this.state

    return (
      <div>
        <Toolbar color='cyan' bg='white' pt={2}>
          {this.renderLeftIcon()}

          <Box mx='auto' fontSize={[1, 1, 1]}>
            {isSearchOpen ? (
              <SearchBox translations={translations} autoFocus />
            ) : (
              <Flex justifyContent='center' alignItems='center'>
                <Text
                  color='black'
                  fontSize={2}
                  mx='auto'
                  children='WINDTODAY'
                  fontWeight='semibold'
                />
                <span className='changelog' />
              </Flex>
            )}
          </Box>

          {!isSearchOpen && (
            <NavLink>
              <Search onClick={e => this.toggle('isSearchOpen')} />
            </NavLink>
          )}
        </Toolbar>
      </div>
    )
  }
}
