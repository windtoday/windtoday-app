import React, {createClass, PropTypes} from 'react'
import {connectRange} from 'react-instantsearch/connectors'
import Rheostat from 'rheostat'

import './style.scss'

const Range = createClass({
  propTypes: {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    currentRefinement: PropTypes.object.isRequired,
    refine: PropTypes.func.isRequired
  },

  getInitialState () {
    const { props } = this
    const { min, max, currentRefinement } = props
    return {min, max, currentRefinement}
  },

  componentWillReceiveProps (sliderState) {
    const {min, max, currentRefinement} = sliderState
    this.setState({min, max, currentRefinement})
  },

  onValuesUpdated (sliderState) {
    const {getCurrentFromSlider} = this
    const {min, max} = sliderState
    const currentRefinement = getCurrentFromSlider(sliderState)
    this.setState({min, max, currentRefinement})
  },

  getCurrentFromSlider (sliderState) {
    return {min: sliderState.values[0], max: sliderState.values[1]}
  },

  isEqual (a, b) {
    return Math.trunc(a) === Math.trunc(b)
  },

  onChange (sliderState) {
    const {getCurrentFromSlider, isEqual, props} = this
    const {refine, currentRefinement} = props
    const currentSlider = getCurrentFromSlider(sliderState)
    const hasMinChanged = !isEqual(currentRefinement.min, currentSlider.min)
    const hasMaxChanged = !isEqual(currentRefinement.max, currentSlider.max)
    const hasChanged = hasMinChanged || hasMaxChanged
    if (hasChanged) refine(currentSlider)
  },

  render () {
    const { onChange, onValuesUpdated, state, props } = this
    const { min, max, label, attributeName } = props
    const {currentRefinement} = state
    const values = [currentRefinement.min, currentRefinement.max]

    return (
      <article data-app='facet' data-facet={attributeName} className='ph3 ph4-l pb4'>
        <header className='f6 fw6 ttu tracked pb3 green'>{attributeName}</header>
        <Rheostat
          className='mh3'
          min={min}
          max={max}
          values={values}
          onValuesUpdated={onValuesUpdated}
          onChange={onChange}
          snap
        />
        <div className='cf'>
          <div className='moon-gray fl w-50 pl2 pt3 tl'>
            <span>{currentRefinement.min}{label}</span>
          </div>
          <div className='moon-gray fl w-50 pt3 pr2 tr'>
            <span>{currentRefinement.max}{label}</span>
          </div>
        </div>
      </article>
    )
  }
})

export default connectRange(Range)
