import { useEffect, useState } from 'react'
import ShoppingListItem from '../../components/ShoppingListItem/ShoppingListItem'
import { useMeals } from '../../hooks/useMeals'
import styles from './ShoppingList.module.css'
import ModalForm from '../../components/ModalForm/ModalForm'

const ShoppingList = () => {
  const { shoppingList, removeAllCompleted, removeAll, addToShoppingList } = useMeals()

  const [modal, setModal] = useState(false)
  //disable button if shoppingList is empty
  const [removeAllDisable, setRemoveAllDisable] = useState(true)
  // disable button if no completed items
  const [completed, setCompleted] = useState(false)

  useEffect(() => {
    shoppingList.length === 0 ? setRemoveAllDisable(true) : setRemoveAllDisable(false)
  
  }, [shoppingList.length])

    useEffect(() => {
      shoppingList.some((ingredient) => ingredient.completed)
        ? setCompleted(true)
        : setCompleted(false)
    }, [shoppingList])


  const handleSubmit = (e) => {
    e.preventDefault()
    const newIngredient = {
      name: e.target.name.value,
      measure: e.target.measure.value,
      completed: false
    }
    addToShoppingList(newIngredient)
    setModal(false)
  }


  return (
    <div
      className={styles.shopping}
      data-testid='shopping-list-page'
    >
      <h1>Shopping List</h1>
      <div className={styles.btnContainer}>
        <button
          className={styles.button}
          onClick={() => setModal(true)}
        >
          Add new item
        </button>
        <button
          className={`${styles.button} ${!completed && styles.disabled}`}
          onClick={removeAllCompleted}
        >
          Remove completed
        </button>
        <button
          className={`${styles.button} ${removeAllDisable && styles.disabled}`}
          onClick={removeAll}
        >
          Remove all
        </button>
      </div>
      {shoppingList.length === 0 && <p>Your shopping list is empty</p>}
      <div className={styles.shoppingList}>
        {shoppingList.map((ingredient, index) => (
          <ShoppingListItem
            key={index}
            ingredient={ingredient}
          />
        ))}
      </div>
      {modal && (
        <ModalForm
          setModal={setModal}
          handleSubmit={handleSubmit}
          legend='New Ingredient'
          submitBtn='Add'
        />
      )}
    </div>
  )
}

export default ShoppingList
