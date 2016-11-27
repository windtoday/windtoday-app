import React, {createClass} from 'react'
import {connectRange} from 'react-instantsearch/connectors'
import Rheostat from 'rheostat'

import './style.scss'

const Range = createClass({
  getInitialState () {
    const { props } = this
    const { min, max } = props
    const value = props.currentRefinement
    return {min, max, value}
  },

  onValuesUpdated (state) {
    const value = {
      min: state.values[0],
      max: state.values[1]
    }

    this.setState({
      min: state.min,
      max: state.max,
      value: value
    })
  },

  onChange (state) {
    const { min, max, refine } = this.props

    const value = {
      min: state.values[0],
      max: state.values[1]
    }

    if (value.min !== min || value.max !== max) {
      refine({min: value.min, max: value.max})
    }
  },

  render () {
    const { min, max } = this.props
    const { onChange, onValuesUpdated, state } = this

    return (
      <div>
        <Rheostat
          min={min}
          max={max}
          values={[state.value.min, state.value.max]}
          onValuesUpdated={onValuesUpdated}
          onChange={onChange}
        />
        <div>
          <span>€{state.value.min}</span>
          <span>€{state.value.max}</span>
        </div>
      </div>
    )
  }
})

export default connectRange(Range)
