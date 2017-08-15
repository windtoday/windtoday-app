import { Component } from 'react'
import { connectRefinementList } from 'react-instantsearch/connectors'

const equals = (arr1, arr2) =>
  arr1.length === arr2.length && arr1.reduce((a, b, i) => a && arr2[i], true)

class RefinementList extends Component {
  componentWillReceiveProps (newProps) {
    const { currentRefinement, defaultRefinement, onRefine, refine } = newProps
    const {
      currentRefinement: oldCurrentRefinement,
      defaultRefinement: oldDefaultRefinement,
      attributeName
    } = this.props

    if (!equals(currentRefinement, oldCurrentRefinement)) {
      refine(currentRefinement)
      onRefine({ attributeName, value: currentRefinement })
    }

    if (!equals(defaultRefinement, oldDefaultRefinement)) {
      refine(defaultRefinement)
      onRefine({ attributeName, value: defaultRefinement })
    }
  }

  render () {
    return null
  }
}

const VirtualRefinementList = connectRefinementList(RefinementList)
export default VirtualRefinementList
