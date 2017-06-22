import {connectCurrentRefinements} from 'react-instantsearch/connectors'
import createClass from 'create-react-class'
import React from 'react'

const ClearAll = createClass({
  render () {
    const {items, refine, children, className, get} = this.props
    const onSearchClear = get('onSearchClear')

    const onClick = () => {
      refine(items)
      onSearchClear()
    }

    return (
      <a
        className={className}
        onClick={onClick}
        >
        {children}
      </a>
    )
  }
})

export default connectCurrentRefinements(ClearAll)
