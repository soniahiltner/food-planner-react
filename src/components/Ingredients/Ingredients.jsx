import { useParams } from 'react-router-dom'
import styles from './Ingredients.module.css'
import IngredientsList from '../IngredientsList/IngredientsList'
import Loader from '../Loader/Loader'
import { useRecipe } from '../../hooks/useRecipe'

const Ingredients = () => {

  const { id } = useParams()
  const {recipe, loading, error} = useRecipe(id)

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