import { Component } from 'react'

import VirtualRefinementList from './VirtualRefinementList'
import CurrentRefinements from './CurrentRefinements'
import InfiniteHits from './InfiniteHits'
import Hit from './Hit'

export default class extends Component {
  render () {
    const { headroom, refine, refinements, onRefine, ...props } = this.props

    return (
      <div>
        <CurrentRefinements headroom={headroom} refineFilter={refine} />
        <VirtualRefinementList
          attributeName='brand'
          defaultRefinement={[...refinements.brand]}
          onRefine={onRefine}
        />
        <VirtualRefinementList
          attributeName='model'
          defaultRefinement={[...refinements.model]}
          onRefine={onRefine}
        />
        <VirtualRefinementList
          attributeName='condition'
          defaultRefinement={[...refinements.condition]}
          onRefine={onRefine}
        />
        <VirtualRefinementList
          attributeName='modality'
          defaultRefinement={[...refinements.modality]}
          onRefine={onRefine}
        />
        <VirtualRefinementList
          attributeName='year'
          defaultRefinement={[...refinements.year]}
          onRefine={onRefine}
        />
        <VirtualRefinementList
          attributeName='mast type'
          defaultRefinement={[...refinements['mast type']]}
          onRefine={onRefine}
        />
        <VirtualRefinementList
          attributeName='fin type'
          defaultRefinement={[...refinements['fin type']]}
          onRefine={onRefine}
        />
        <VirtualRefinementList
          attributeName='boom type'
          defaultRefinement={[...refinements['boom type']]}
          onRefine={onRefine}
        />
        <VirtualRefinementList
          attributeName='sail size range'
          defaultRefinement={[...refinements['sail size range']]}
          onRefine={onRefine}
        />
        <VirtualRefinementList
          attributeName='board size range'
          defaultRefinement={[...refinements['board size range']]}
          onRefine={onRefine}
        />
        <VirtualRefinementList
          attributeName='mast size range'
          defaultRefinement={[...refinements['mast size range']]}
          onRefine={onRefine}
        />
        <VirtualRefinementList
          attributeName='mast carbon range'
          defaultRefinement={[...refinements['mast carbon range']]}
          onRefine={onRefine}
        />
        <VirtualRefinementList
          attributeName='boom size range'
          defaultRefinement={[...refinements['boom size range']]}
          onRefine={onRefine}
        />
        <InfiniteHits hitComponent={Hit} refineFilter={refine} {...props} />
      </div>
    )
  }
}
