import { useParams } from 'react-router-dom'
import styles from './Category.module.css'
import { useEffect, useState } from 'react'
import api from '../../helpers/apis'
import Loader from '../Loader/Loader'
import MealCard from '../MealCard/MealCard'

const Category = () => {
  const { category } = useParams()
  const [categoryMeals, setCategoryMeals] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  // Get meals by category
  const getMealsByCategory = async (category) => {
    try {
      setLoading(true)
      const res = await fetch(`${api.FILTER_CATEGORY}${category}`)
      const data = await res.json()
      setCategoryMeals(data.meals)
      setLoading(false)
    } catch (error) {
      console.error(error)
      setError(error)
      setLoading(false)
    }
  }
  useEffect(() => {
    getMealsByCategory(category)
  }, [category])

  if (loading) {
    return <Loader />
  }
  if (error) {
    return <h1 style={{textAlign:'center'}}>Error: {error.message}</h1>
  }
  return (
    <div className={styles.category}>
      <h1>{category} Recipes</h1>
      <div className={styles.grid}>
        {categoryMeals.map(meal => (
          <MealCard key={meal.idMeal} meal={meal} />)
        )}
      </div>
    </div>
  )
}

export default Category