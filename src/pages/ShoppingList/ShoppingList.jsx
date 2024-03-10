import ShoppingListItem from '../../components/ShoppingListItem/ShoppingListItem'
import { useMeals } from '../../hooks/useMeals'
import styles from './ShoppingList.module.css'

const ShoppingList = () => {
  const { shoppingList } = useMeals()
  return (
    <div className={styles.shopping}>
      <h1>Shopping List</h1>
      {shoppingList.length === 0 && <p>Your shopping list is empty</p>}
      <div className={styles.shoppingList}>
        {shoppingList.map((ingredient, index) => (
          <ShoppingListItem
            key={index}
            ingredient={ingredient}
          />
        ))}
      </div>
    </div>
  )
}

export default ShoppingList
