import { useParams } from 'react-router-dom'
import styles from './Recipe.module.css'
import RecipeIngredients from '../RecipeIngredients/RecipeIngredients'
import FavouriteIcon from '../FavouriteIcon/FavouriteIcon'
import AddToPlanIcon from '../AddToPlanIcon/AddToPlanIcon'
import Loader from '../Loader/Loader'
import { useRecipe } from '../../hooks/useRecipe'

const Recipe = () => {
  const { id } = useParams()
  const { recipe, loading, error } = useRecipe(id)
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
