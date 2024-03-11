import { useMeals } from '../../hooks/useMeals'
import IngredientsListItem from '../IngredientsListItem/IngredientsListItem'
import styles from './IngredientsList.module.css'
import PropTypes from 'prop-types'

const IngredientsList = ({ recipe }) => {

  const { alert } = useMeals()
  const {
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strIngredient15,
    strIngredient16,
    strIngredient17,
    strIngredient18,
    strIngredient19,
    strIngredient20,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
    strMeasure7,
    strMeasure8,
    strMeasure9,
    strMeasure10,
    strMeasure11,
    strMeasure12,
    strMeasure13,
    strMeasure14,
    strMeasure15,
    strMeasure16,
    strMeasure17,
    strMeasure18,
    strMeasure19,
    strMeasure20
  } = recipe || {}

  const ingredientsName = [
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strIngredient15,
    strIngredient16,
    strIngredient17,
    strIngredient18,
    strIngredient19,
    strIngredient20
  ]

  const ingredientsMeasures = [
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
    strMeasure7,
    strMeasure8,
    strMeasure9,
    strMeasure10,
    strMeasure11,
    strMeasure12,
    strMeasure13,
    strMeasure14,
    strMeasure15,
    strMeasure16,
    strMeasure17,
    strMeasure18,
    strMeasure19,
    strMeasure20
  ]

  // Array of ingredients objects
  let ingredients = []
  ingredientsName.forEach((ingredient, index) => {
    if (ingredient) {
      ingredients.push({
        name: ingredient[0].toUpperCase() + ingredient.slice(1),
        measure: ingredientsMeasures[index]
      })
    }
  })

  return (
    <div className={styles.ingredientsList}>
      {alert && <p className={styles.alert}>Added successfully</p>}
      {ingredients.map((ingredient, index) => (
        <IngredientsListItem
          key={index}
          ingredient={ingredient}
        />
      ))}
    </div>
  )
}

IngredientsList.propTypes = {
  recipe: PropTypes.object.isRequired
}

export default IngredientsList
