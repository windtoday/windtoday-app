import React, {createClass} from 'react'
import {connectCurrentRefinements} from 'react-instantsearch/connectors'

const ClearAll = createClass({
  render () {
    const {items, refine, children, className, get} = this.props
    const onClear = get('onClear')

    const onClick = () => {
      refine(items)
      onClear()
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
