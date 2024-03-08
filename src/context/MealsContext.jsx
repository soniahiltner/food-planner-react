import { createContext, useEffect, useState } from "react"
import api from "../helpers/apis"
import { useLocalStorage } from "../hooks/useLocalStorage"
import PropTypes from "prop-types"

export const MealsContext = createContext()

export const MealsProvider = ({ children }) => {
  const [categories, setCategories] = useState([])
  const [favourites, setFavourites] = useLocalStorage("favourites-meals", [])
  const [foodPlan, setFoodPlan] = useLocalStorage("food-plan", [])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  // Fetch categories
  const fetchCategories = async () => {
    try {
      setLoading(true)
      const res = await fetch(api.CATEGORIES_DESCRIPTION_URL)
      const data = await res.json()
      setCategories(data.categories)
      //console.log(data.categories)
      setLoading(false)
    } catch (error) {
      console.error(error)
      setError(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  // Add to favourites
  const addToFavourites = (mealId) => {
    const newFavourites = [...favourites, mealId]
    setFavourites(newFavourites)
  }

  // Remove from favourites
  const removeFromFavourites = (mealId) => {
    const newFavourites = favourites.filter((id) => id !== mealId)
    setFavourites(newFavourites)
  }

  // Toggle favourites
  const toggleFavourites = (mealId) => {
    if (favourites.includes(mealId)) {
      removeFromFavourites(mealId)
    } else {
      addToFavourites(mealId)
    }
  }

  // Add to food plan
  const addToFoodPlan = (mealId) => {
    const newFoodPlan = [...foodPlan, mealId]
    setFoodPlan(newFoodPlan)
  }

  // Remove from food plan
  const removeFromFoodPlan = (mealId) => {
    const newFoodPlan = foodPlan.filter((id) => id !== mealId)
    setFoodPlan(newFoodPlan)
  }

  // Toggle food plan
  const toggleFoodPlan = (mealId) => {
    if (foodPlan.includes(mealId)) {
      removeFromFoodPlan(mealId)
    } else {
      addToFoodPlan(mealId)
    }
  }


  return (
    <MealsContext.Provider
      value={{
        categories,
        favourites,
        error,
        loading,
        setFavourites,
        foodPlan,
        setFoodPlan,
        addToFavourites,
        removeFromFavourites,
        toggleFavourites,
        addToFoodPlan,
        removeFromFoodPlan,
        toggleFoodPlan
      }}
    >
      {children}
    </MealsContext.Provider>
  )
}

MealsProvider.propTypes = {
  children: PropTypes.node.isRequired
}