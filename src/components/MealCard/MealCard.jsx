import { Link } from 'react-router-dom'
import styles from './MealCard.module.css'
import PropTypes from 'prop-types'
import FavouriteIcon from '../FavouriteIcon/FavouriteIcon'

const MealCard = ({ meal }) => {

  return (
    <div className={styles.mealCard}>
      <div className={styles.mealCardName}>
        <h3>{meal.strMeal}</h3>
        <FavouriteIcon idMeal={meal.idMeal} />
      </div>
      
      <Link to={`/recipe/${meal.idMeal}`}>
        <img
          className={styles.mealImage}
          src={meal.strMealThumb}
          alt={meal.strMeal}
        />
      </Link>
    </div>
  )
}

MealCard.propTypes = {
  meal: PropTypes.object.isRequired
}

export default MealCard