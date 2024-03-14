import { useParams } from 'react-router-dom'
import styles from './Category.module.css'
import api from '../../helpers/apis'
import Loader from '../Loader/Loader'
import MealCard from '../MealCard/MealCard'
import { useFetch } from '../../hooks/useFetch'

const Category = () => {
  const { category } = useParams()

  // Get meals by category
  const {data, loading, error} = useFetch(api.FILTER_CATEGORY, category)
 
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
        {data.map(meal => (
          <MealCard key={meal.idMeal} meal={meal} />)
        )}
      </div>
    </div>
  )
}

export default Category