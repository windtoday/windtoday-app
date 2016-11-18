import React from 'react'
import {Pagination} from 'react-instantsearch/dom'

import './style'

function MyPagination (props) {
  const translations = {
    previous: 'Previous',
    next: 'Next',
    first: 'First',
    last: 'Last',
    page: page => (page + 1).toLocaleString(),
    ariaPrevious: 'Previous page',
    ariaNext: 'Next page',
    ariaFirst: 'First page',
    ariaLast: 'Last page',
    ariaPage: page => `Page ${(page + 1).toLocaleString()}`
  }

  const theme = {
    root: 'list tc pt4 ph0 ma0',
    item: 'dib mr1 mb2',
    itemFirst: 'Pagination__item--first',
    itemLast: 'Pagination__item--last',
    itemPrevious: 'Pagination__item--previous',
    itemNext: 'Pagination__item--next',
    itemPage: 'Pagination__item--page',
    itemSelected: 'Pagination__item--selected',
    itemDisabled: 'Pagination__item--disabled',
    itemLink: 'f6 f5-ns b db pa2 link blue ba dim'
  }

  return (
    <div data-app='pagination'>
      <Pagination theme={theme} translations={translations} showFirst={false} pagesPadding={2} />
    </div>
  )
}

export default MyPagination
