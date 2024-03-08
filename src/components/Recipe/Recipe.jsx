import { useParams } from 'react-router-dom'
import styles from './Recipe.module.css'
import api from '../../helpers/apis'
import { useEffect, useState } from 'react'
import RecipeIngredients from '../RecipeIngredients/RecipeIngredients'
import FavouriteIcon from '../FavouriteIcon/FavouriteIcon'

const Recipe = () => {
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
  console.log(recipe)
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
