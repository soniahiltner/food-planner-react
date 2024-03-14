import { useParams } from 'react-router-dom'
import styles from './Ingredients.module.css'
import { useCallback, useEffect, useState } from 'react'
import api from '../../helpers/apis'
import IngredientsList from '../IngredientsList/IngredientsList'
import { useMeals } from '../../hooks/useMeals'
import Loader from '../Loader/Loader'

const Ingredients = () => {

  const { id } = useParams()
  const [recipe, setRecipe] = useState(null)
  const { loading, setLoading, error, setError } = useMeals()


  // Get meal by id
  const getRecipe = useCallback(async (id) => {
    try {
      setLoading(true)
      const res = await fetch(`${api.SEARCHID_URL}${id}`)
      const data = await res.json()
      setRecipe(data.meals[0])
    } catch (error) {
      console.error(error)
      setError(error)
    } finally {
      setLoading(false)
    }
  }, [setLoading, setError])
  useEffect(() => {
    getRecipe(id)
  }, [id, setLoading, setError, getRecipe])

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <h1 style={{ textAlign: 'center' }}>Error: {error}</h1>
  }

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