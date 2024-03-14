import { useMeals } from '../../hooks/useMeals'
import styles from './AddToShoppingListBtn.module.css'
import PropTypes from 'prop-types'

const AddToShoppingListBtn = ({ ingredient }) => {

  const { addToShoppingList, setAlert } = useMeals()

  const handleClick = () => {
    addToShoppingList(ingredient)
    setAlert(true)
    setTimeout(() => {
      setAlert(false)
    }, 2000)
  }
  return (
    <div className={styles.btnContainer}>
      <button
        className={styles.addBtn}
        onClick={handleClick}
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
