import { Link } from 'react-router-dom'
import styles from './MenuItem.module.css'
import PropTypes from 'prop-types'
import RemoveFromPlan from '../RemoveFromPlan/RemoveFromPlan'


const MenuItem = ({ meal }) => {
  const {strMeal, idMeal} = meal
  
  return (
    <div className={styles.menuItem}>
      <div className={styles.menuName}>
        <Link to={`/recipe/${meal.idMeal}`}>
          <span>{strMeal}</span>
        </Link>
        
      </div>
      <div className={styles.ingredientsBtn}>
        <Link
          to={`/ingredients/${idMeal}`}
          className={styles.ingredientsLink}
        >
          Ingredients
        </Link>
      </div>
      <RemoveFromPlan idMeal={idMeal} />
    </div>
  )
}
MenuItem.propTypes = {
  meal: PropTypes.object.isRequired
}

export default MenuItem