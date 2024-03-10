import { useParams } from 'react-router-dom'
import styles from './Ingredients.module.css'
import { useEffect, useState } from 'react'
import api from '../../helpers/apis'
import IngredientsList from '../IngredientsList/IngredientsList'

const Ingredients = () => {

  const { id } = useParams()
  const [recipe, setRecipe] = useState(null)
  // Get meal by id
  const getRecipe = async (id) => {
    try {
      const res = await fetch(`${api.SEARCHID_URL}${id}`)
      const data = await res.json()
      setRecipe(data.meals[0])
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getRecipe(id)
  }, [id])

  if (!recipe) {
    return null
  }
  
  return (
    <div className={styles.ingredients}>
      <h1>{recipe.strMeal}</h1>
      <IngredientsList recipe={recipe} />
    </div>
  )
}

export default Ingredients