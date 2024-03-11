import { useState } from 'react'
import styles from './ShoppingListItem.module.css'
import PropTypes from 'prop-types'
import { useMeals } from '../../hooks/useMeals'
import DoneButton from '../DoneButton/DoneButton'
import ModalForm from '../ModalForm/ModalForm'

const ShoppingListItem = ({ ingredient }) => {
  const { name, measure } = ingredient
  const [modal, setModal] = useState(false)
  const { editShoppingListItem, removeFromShoppingList } = useMeals()
  const handleSubmit = (e) => {
    e.preventDefault()
    const newIngredient = {
      name: e.target.name.value,
      measure: e.target.measure.value,
      completed: false
    }
    editShoppingListItem(ingredient, newIngredient)
    setModal(false)
  }

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
          onClick={() => setModal(true)}
        >
          Edit</button>
        <button
          className={`${styles.button} ${styles.deleteBtn}`}
          onClick={() => removeFromShoppingList(ingredient)}
        >
          Delete
        </button>
      </div>
      {modal && (
        <ModalForm
          setModal={setModal}
          handleSubmit={handleSubmit}
          defaultName={name}
          defaultMeasure={measure}
          legend='Edit Ingredient'
          submitBtn='Update'
        />
      )}
      
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