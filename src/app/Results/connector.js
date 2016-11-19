import {PropTypes} from 'react'
import { createConnector } from 'react-instantsearch'

function getId () {
  return 'p'
}

export default createConnector({
  displayName: 'AlgoliaInfiniteHits',

  propTypes: {
    hitsPerPage: PropTypes.number
  },

  getProps (componentProps, allWidgetsState, resultsStruct) {
    const query = allWidgetsState.q
    const { toggle, get } = componentProps
    const props = {toggle, get, query}

    if (!resultsStruct.results) {
      this._allResults = []
      return {
        hits: this._allResults,
        hasResults: false,
        hasMore: false,
        ...props
      }
    }

    const {hits, page, nbPages, hitsPerPage, nbHits} = resultsStruct.results

    if (page === 0) {
      this._allResults = hits
    } else {
      const previousPage = this._allResults.length / hitsPerPage - 1

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

  getSearchParameters (searchParameters, props, widgetsState) {
    const id = getId()
    const currentPage = widgetsState[id] ?
      widgetsState[id] :
      0
    const isHitsPerPageDefined = typeof searchParameters.hitsPerPage !== 'undefined'

    return searchParameters.setQueryParameters({
      page: currentPage,
      hitsPerPage: isHitsPerPageDefined ? searchParameters.hitsPerPage : props.hitsPerPage
    })
  },

  refine (props, widgetsState) {
    const id = getId()
    const nextPage = widgetsState[id] ?
      widgetsState[id] + 1 :
      1
    return {
      ...widgetsState,
      [id]: nextPage
    }
  },

  transitionState (props, prevState, nextState) {
    const id = getId()
    if (prevState[id] === nextState[id]) {
      return {
        ...nextState,
        [id]: 0
      }
    }
    return nextState
  }
})
