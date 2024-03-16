import MealCard from '../../components/MealCard/MealCard'
import { useMeals } from '../../hooks/useMeals'
import styles from './Favourites.module.css'
import api from '../../helpers/apis'
import { useEffect, useState } from 'react'

const Favourites = () => {

  const { favourites } = useMeals()
  const [favouritesMeals, setFavouritesMeals] = useState([])
  
  // Get favourites meals from the API
  useEffect(() => {
    const fetchFavourites = async () => {
      const favouritesMeals = await Promise.all(
        favourites.map(async (id) => {
          const response = await fetch(`${api.SEARCHID_URL}${id}`)
          const data = await response.json()
          return data.meals[0]
        })
      )
      setFavouritesMeals(favouritesMeals)
    }
    fetchFavourites()
  }, [favourites])

  return (
    <div
      className={styles.favourites}
      data-testid='favourites-page'
    >
      <h1>My Favourites</h1>
      {favourites.length === 0 && <p>No favourites yet</p>}
      <div className={styles.grid}>
        {favouritesMeals.map((meal) => (
          <MealCard
            key={meal.idMeal}
            meal={meal}
          />
        ))}
      </div>
    </div>
  )
}

export default Favourites