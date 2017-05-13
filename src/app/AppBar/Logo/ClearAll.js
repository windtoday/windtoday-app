import React, {createClass} from 'react'
import {connectCurrentRefinements} from 'react-instantsearch/connectors'

const ClearAll = createClass({
  render () {
    const {items, refine, children, className} = this.props
    const onClick = () => refine(items)

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
