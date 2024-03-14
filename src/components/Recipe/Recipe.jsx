import { useParams } from 'react-router-dom'
import styles from './Recipe.module.css'
import api from '../../helpers/apis'
import { useCallback, useEffect, useState } from 'react'
import RecipeIngredients from '../RecipeIngredients/RecipeIngredients'
import FavouriteIcon from '../FavouriteIcon/FavouriteIcon'
import AddToPlanIcon from '../AddToPlanIcon/AddToPlanIcon'
import { useMeals } from '../../hooks/useMeals'
import Loader from '../Loader/Loader'

const Recipe = () => {
  const { id } = useParams()
  const [recipe, setRecipe] = useState(null)
  const { loading, error, setLoading, setError } = useMeals()
  
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
    <div className={styles.recipe}>
      <h2>{recipe.strMeal}</h2>
      <div className={styles.imgContainer}>
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
        />
        <div className={styles.tags}>
          <FavouriteIcon idMeal={recipe.idMeal} />
          <AddToPlanIcon idMeal={recipe.idMeal} />
          <span className={styles.countryTag}>{recipe.strArea}</span>
        </div>
      </div>
      <div className={styles.instructions}>
        <h3>Instructions</h3>
        <p>{recipe.strInstructions}</p>
      </div>
      <RecipeIngredients recipe={recipe}/>
    </div>
  )
}

export default Recipe
