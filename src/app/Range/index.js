import React, {createClass} from 'react'
import {connectRange} from 'react-instantsearch/connectors'
import Rheostat from 'rheostat'

import './style.scss'

const Range = createClass({
  getInitialState () {
    const { props } = this
    const { min, max, currentRefinement } = props
    const value = currentRefinement
    return {min, max, value}
  },

  componentWillReceiveProps (sliderState) {
    const value = {
      min: sliderState.currentRefinement.min,
      max: sliderState.currentRefinement.max
    }

    this.setState({
      min: sliderState.min,
      max: sliderState.max,
      value: value
    })
  },

  onValuesUpdated (sliderState) {
    const value = {
      min: sliderState.values[0],
      max: sliderState.values[1]
    }

    this.setState({
      min: sliderState.min,
      max: sliderState.max,
      value: value
    })
  },

  onChange (sliderState) {
    const { refine, currentRefinement } = this.props

    const value = {
      min: sliderState.values[0],
      max: sliderState.values[1]
    }

    if (currentRefinement.min !== value.min || currentRefinement.max !== value.max) {
      refine({min: value.min, max: value.max})
    }
  },

  render () {
    const { onChange, onValuesUpdated, state, props } = this
    const { min, max, label, title, currentRefinement } = props
    const values = [currentRefinement.min, currentRefinement.max].map(Math.trunc)

    return (
      <article data-app='facet' data-facet={title} className='ph3 ph4-l pb4'>
        <header className='f6 fw6 ttu tracked pb3 green'>{title}</header>
        <Rheostat
          className='mh3'
          min={Math.trunc(min)}
          max={Math.trunc(max)}
          values={values}
          onValuesUpdated={onValuesUpdated}
          onChange={onChange}
          snap
        />
        <div className='cf'>
          <div className='moon-gray fl w-50 pl2 pt3 tl'>
            <span>{Math.trunc(state.value.min)}{label}</span>
          </div>
          <div className='moon-gray fl w-50 pt3 pr2 tr'>
            <span>{Math.trunc(state.value.max)}{label}</span>
          </div>
        </div>
      </article>
    )
  }
})

export default connectRange(Range)
