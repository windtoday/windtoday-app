import {Highlight} from 'react-instantsearch/dom'
import PropTypes from 'prop-types'

const HitComponent = ({ hit }) =>
  <div className='hit'>
    <div>
      <div className='hit-picture'>
        <img src={`${hit.image}`} />
      </div>
    </div>
    <div className='hit-content'>
      <div>
        <Highlight attributeName='name' hit={hit} />
        <span>
          {' '}- ${hit.price}
        </span>
        <span>
          {' '}- {hit.rating} stars
        </span>
      </div>
      <div className='hit-type'>
        <Highlight attributeName='type' hit={hit} />
      </div>
      <div className='hit-description'>
        <Highlight attributeName='description' hit={hit} />
      </div>
    </div>
  </div>

HitComponent.propTypes = {
  hit: PropTypes.object
}

export default HitComponent
