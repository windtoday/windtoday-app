import {PropTypes} from 'react'
import { createConnector } from 'react-instantsearch'

function getId () {
  return 'page'
}

export default createConnector({
  displayName: 'AlgoliaInfiniteHits',

  propTypes: {
    hitsPerPage: PropTypes.number
  },

  getProvidedProps (componentProps, searchState, searchResults) {
    const { toggle, get } = componentProps
    const {searching} = searchResults
    const {query} = searchState

    const props = {toggle, get, query, searching}

    if (!searchResults.results) {
      this._allResults = []
      return {
        hits: this._allResults,
        hasResults: false,
        hasMore: false,
        ...props
      }
    }

    const {hits, page, nbPages, hitsPerPage, nbHits} = searchResults.results

    if (page === 0) {
      this._allResults = hits
    } else {
      const previousPage = (this._allResults.length / hitsPerPage) - 1

      if (page > previousPage) {
        this._allResults = [
          ...this._allResults,
          ...hits
        ]
      } else if (page < previousPage) {
        this._allResults = hits
      }
      // If it is the same page we do not touch the page result list
    }

    const lastPageIndex = nbPages - 1
    const hasResults = nbHits !== 0
    const hasMore = page < lastPageIndex
    return {
      hits: this._allResults,
      hasResults,
      hasMore,
      ...props
    }
  },

  getSearchParameters (searchParameters, props, searchState) {
    const id = getId()
    const currentPage = searchState[id] ? searchState[id] : 0
    return searchParameters.setQueryParameters({
      page: currentPage
    })
  },

  refine (props, searchState) {
    const id = getId()
    const nextPage = searchState[id] ? Number(searchState[id]) + 1 : 1
    return {
      ...searchState,
      [id]: nextPage
    }
  },

  transitionState (props, prevSearchState, nextSearchState) {
    const id = getId()
    if (prevSearchState[id] === nextSearchState[id]) {
      return {
        ...nextSearchState,
        [id]: 0
      }
    }
    return nextSearchState
  }
})
