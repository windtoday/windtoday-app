import createClass from 'create-react-class'
import React from 'react'

import HomeProducts from '../HomeProducts'
import HomeHero from '../HomeHero'

export default createClass({
  componentWillMount () {
    this.props.set('onSearchClear', () => {})
  },

  render () {
    const {get} = this.props

    return (
      <main>
        <HomeHero />

        <HomeProducts
          filters=''
          hitsPerPage={get('hitsPerPage')}
          {...this.props}
        />
      </main>
    )
  }
})
