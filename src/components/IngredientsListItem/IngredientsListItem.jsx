import AddToShoppingListBtn from '../AddToShoppingListBtn/AddToShoppingListBtn'
import styles from './IngredientsListItem.module.css'
import PropTypes from 'prop-types'

const IngredientsListItem = ({ ingredient }) => {

  const { name, measure } = ingredient || {}
  return (
    <div className={styles.ingredient}>
      <div className={styles.ingredientName}>
        <span>{name}</span>
      </div>
      <div className={styles.ingredientMeasure}>
        <span>{measure}</span>
      </div>
      <AddToShoppingListBtn ingredient={ingredient} />
      
    </div>
  )
}

IngredientsListItem.propTypes = {
  ingredient: PropTypes.object.isRequired
}

export default IngredientsListItem