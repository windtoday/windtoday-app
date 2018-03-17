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
          attribute='brand'
          defaultRefinement={[...refinements.brand]}
          onRefine={onRefine}
        />
        <VirtualRefinementList
          attribute='model'
          defaultRefinement={[...refinements.model]}
          onRefine={onRefine}
        />
        <VirtualRefinementList
          attribute='condition'
          defaultRefinement={[...refinements.condition]}
          onRefine={onRefine}
        />
        <VirtualRefinementList
          attribute='modality'
          defaultRefinement={[...refinements.modality]}
          onRefine={onRefine}
        />
        <VirtualRefinementList
          attribute='year'
          defaultRefinement={[...refinements.year]}
          onRefine={onRefine}
        />
        <VirtualRefinementList
          attribute='mast type'
          defaultRefinement={[...refinements['mast type']]}
          onRefine={onRefine}
        />
        <VirtualRefinementList
          attribute='fin type'
          defaultRefinement={[...refinements['fin type']]}
          onRefine={onRefine}
        />
        <VirtualRefinementList
          attribute='boom type'
          defaultRefinement={[...refinements['boom type']]}
          onRefine={onRefine}
        />
        <VirtualRefinementList
          attribute='sail size range'
          defaultRefinement={[...refinements['sail size range']]}
          onRefine={onRefine}
        />
        <VirtualRefinementList
          attribute='board size range'
          defaultRefinement={[...refinements['board size range']]}
          onRefine={onRefine}
        />
        <VirtualRefinementList
          attribute='mast size range'
          defaultRefinement={[...refinements['mast size range']]}
          onRefine={onRefine}
        />
        <VirtualRefinementList
          attribute='mast carbon range'
          defaultRefinement={[...refinements['mast carbon range']]}
          onRefine={onRefine}
        />
        <VirtualRefinementList
          attribute='boom size range'
          defaultRefinement={[...refinements['boom size range']]}
          onRefine={onRefine}
        />
        <InfiniteHits hitComponent={Hit} refineFilter={refine} {...props} />
      </div>
    )
  }
}
