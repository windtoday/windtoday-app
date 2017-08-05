import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Tooltip, Badge } from 'rebass'

const CustomBadge = styled(Badge)`
border-radius: 1rem;
padding-right: 8px;
padding-left: 8px;
cursor: pointer;
`

const capitalize = str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`

const Tag = ({ hit, attributeName, ...props }) => {
  const value = hit[attributeName]
  if (value == null) return false

  const onClick = e => {
    e.preventDefault()
    props.refine([value])
  }

  return (
    <Tooltip text={`Filter by ${capitalize(attributeName)}`}>
      <CustomBadge key={hit.objectID} onClick={onClick} m={1} {...props}>
        {capitalize(value)}
      </CustomBadge>
    </Tooltip>
  )
}

Tag.propTypes = {
  hit: PropTypes.object.isRequired,
  attributeName: PropTypes.string.isRequired
}

export default Tag
