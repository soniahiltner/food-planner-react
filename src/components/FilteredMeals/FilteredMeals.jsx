import { useSearchParams } from 'react-router-dom'
import styles from './FilteredMeals.module.css'
import { useFetch } from '../../hooks/useFetch'
import api from '../../helpers/apis'
import Loader from '../Loader/Loader'
import MealCard from '../MealCard/MealCard'

const FilteredMeals = () => {

  const [searchParams] = useSearchParams()
  const { name, ingredient, letter, country } = Object.fromEntries(searchParams)
  let url
  let title
  if (name) {
    url = api.SEARCHNAME_URL
    title = `Recipes found for ${name}`
  } else if (ingredient) {
    url = api.FILTER_INGREDIENT_URL
    title = `Recipes found for ${ingredient}`
  } else if (letter) {
    url = api.SEARCHLETTER_URL
    title = `Recipes starting by ${letter}`
  } else if (country) {
    url = api.FILTER_COUNTRY
    title = `${country} recipes`
  }
  const param = name || ingredient || letter || country || ' '
  const { data, loading, error } = useFetch(url, param)
  
  if (loading) {
    return <Loader />
  }
  if (error) {
    return <h1 style={{ textAlign: 'center' }}>Error: {error.message}</h1>
  }
  if (!data) {
    return <h1 style={{textAlign: 'center'}}>No results found</h1>
  }

  return (
    <div className={styles.results}>
      <h1>{title}</h1>
      <div className={styles.grid}>
        {data.map(meal => (
          <MealCard key={meal.idMeal} meal={meal} />)
        )}
      </div>
    </div>
  )
}

export default FilteredMeals