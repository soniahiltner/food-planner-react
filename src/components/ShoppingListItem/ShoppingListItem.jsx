import { useState } from 'react'
import styles from './ShoppingListItem.module.css'
import PropTypes from 'prop-types'
import { useMeals } from '../../hooks/useMeals'
import DoneButton from '../DoneButton/DoneButton'

const ShoppingListItem = ({ ingredient }) => {
  const { name, measure, completed } = ingredient
  const [editIngredient, setEditIngredient] = useState(false)
  const { removeFromShoppingList } = useMeals()

  return (
    <div className={styles.ingredientContainer}>
      <div className={styles.ingredient}>
        <div className={styles.description}>
          <h2 className={styles.name}>{name}</h2>
          <h3 className={styles.measure}>{measure}</h3>
        </div>
        <DoneButton ingredient={ingredient} />
      </div>
      <hr />
      <div className={styles.btnContainer}>
        <button
          className={`${styles.button} ${styles.editBtn}`}
          onClick={() => setEditIngredient(true)}
        >
          Edit</button>
        <button
          className={`${styles.button} ${styles.deleteBtn}`}
          onClick={() => removeFromShoppingList(ingredient)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

ShoppingListItem.propTypes = {
  ingredient: PropTypes.shape({
    name: PropTypes.string.isRequired,
    measure: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired
}

export default ShoppingListItem