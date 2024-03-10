import { useMeals } from '../../hooks/useMeals'
import styles from './AddToShoppingListBtn.module.css'
import PropTypes from 'prop-types'

const AddToShoppingListBtn = ({ ingredient }) => {

  const { addToShoppingList } = useMeals()
  return (
    <div className={styles.btnContainer}>
      <button
        className={styles.addBtn}
        onClick={() => addToShoppingList(ingredient)}
      >
        Add to Shopping List
      </button>
    </div>
  )
}

AddToShoppingListBtn.propTypes = {
  ingredient: PropTypes.object.isRequired
}

export default AddToShoppingListBtn
