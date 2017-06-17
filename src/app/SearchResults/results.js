import {connectInfiniteHits} from 'react-instantsearch/connectors'
import React, {createElement, createClass} from 'react'
import classnames from 'classnames'

import Overlay from '../Overlay'
import Footer from '../Footer'
import SearchNoHits from '../SearchNoHits'
import SearchHits from '../SearchHits'

import './style.scss'

const Results = createClass({
  componentWillMount () {
    this.props.set('onSearchClear', () => {
      const el = this.refs.results
      el.scrollTop = 0
    })
  },
  render () {
    const {props} = this
    const {get, hits} = props

    const hasResults = hits.length > 0
    const isAsideRightOpen = get('searchFiltersRightOpen')
    const isAsideLeftOpen = get('searchFiltersLeftOpen')
    const hasAsideOpen = isAsideLeftOpen || isAsideRightOpen
    const isDesktop = get('isDesktop')
    const isMobile = get('isMobile')

    const theme = classnames('results fl vh-100 bg-grey-50', {
      'overflow-x-hidden overflow-y-scroll': isAsideRightOpen || isAsideLeftOpen,
      'overflow-x-hidden-ns overflow-y-scroll-ns': !isAsideRightOpen || !isAsideLeftOpen
    })

    const style = classnames(theme, {
      'results--expand': isAsideLeftOpen,
      'w-80': isDesktop && isAsideRightOpen,
      'w-100': (isDesktop && !isAsideRightOpen) || isMobile
    })

    return (
      <main
        ref='results'
        data-app='search-results' className={style}>
        {isMobile && <Overlay active={hasAsideOpen} />}
        {createElement(hasResults ? SearchHits : SearchNoHits, props)}
        <Footer />
      </main>
    )
  }
})

export default connectInfiniteHits(Results)
