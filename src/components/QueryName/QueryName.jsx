import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../helpers/apis'
import MealCard from '../MealCard/MealCard'
import styles from './QueryName.module.css'
import Loader from '../Loader/Loader'

const QueryName = () => {
  const { name } = useParams()
  
  const [results, setResults] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  //fetch meals by name
  const getMealsByName = async (name) => {
    try {
      setLoading(true)
      const res = await fetch(`${api.SEARCHNAME_URL}${name}`)
      const data = await res.json()
      setResults(data.meals)
      setLoading(false)
    } catch (error) {
      console.error(error)
      setError(error)
      setLoading(false)
    }
  }
  useEffect(() => {
    getMealsByName(name)
  }, [name])

  if (loading) {
    return <Loader />
  }
  if (error) {
    return <h1 style={{textAlign:'center'}}>Error: {error.message}</h1>
  }
  
  return (
    <div className={styles.results}>
      
      {!results && <h1>No results found</h1>}
      {results && (
        <>
          <h1>Results for {name}</h1>
          <div className={styles.grid}>
            {results.map((meal) => (
              <MealCard
                key={meal.idMeal}
                meal={meal}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default QueryName
