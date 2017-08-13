import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Badge } from 'rebass'

const CustomBadge = styled(Badge)`
border-radius: 1rem;
padding-right: 8px;
padding-left: 8px;
cursor: pointer;
`

const Tag = ({ hit, attributeName, addTag, removeTag, ...props }) => {
  const value = hit[attributeName]
  if (value == null) return false

  const refine = removeTag({ attributeName, value })

  const onClick = e => {
    e.preventDefault()
    addTag({ attributeName, value, refine })
  }

  return (
    <CustomBadge key={hit.objectID} onClick={onClick} m={1} {...props}>
      {value}
    </CustomBadge>
  )
}

Tag.propTypes = {
  hit: PropTypes.object.isRequired,
  attributeName: PropTypes.string.isRequired
}

export default Tag
