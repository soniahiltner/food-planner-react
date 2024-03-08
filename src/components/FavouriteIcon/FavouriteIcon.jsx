import styles from './FavouriteIcon.module.css'
import Tooltip from '../Tooltip/Tooltip'
import PropTypes from 'prop-types'
import { useMeals } from '../../hooks/useMeals'
import { useState } from 'react'

const FavouriteIcon = ({ idMeal }) => {

  const { favourites, toggleFavourites } = useMeals()
  const [hovering, setHovering] = useState(false)
  const isFavourite = favourites.includes(idMeal)

  const mouseOver = () => setHovering(true)
  const mouseOut = () => setHovering(false)
  return (
    <span
      className={`${isFavourite ? styles.favStar : styles.noFav}`}
      onClick={() => toggleFavourites(idMeal)}
      onMouseOver={mouseOver}
      onMouseOut={mouseOut}
    >
      <i className='fa fa-star'></i>
      {hovering && (
        <Tooltip
          text={isFavourite ? 'Remove from favourites' : 'Add to favourites'}
          position='top'
        />
      )}
    </span>
  )
}

FavouriteIcon.propTypes = {
  idMeal: PropTypes.string.isRequired
}

export default FavouriteIcon