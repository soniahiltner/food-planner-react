import { createContext, useEffect, useState } from "react"
import api from "../helpers/apis"
import { useLocalStorage } from "../hooks/useLocalStorage"
import PropTypes from "prop-types"

export const MealsContext = createContext()

export const MealsProvider = ({ children }) => {
  const [categories, setCategories] = useState([])
  const [favourites, setFavourites] = useLocalStorage("food-plan-favourites", [])
  const [foodPlan, setFoodPlan] = useLocalStorage("food-plan", [])
  const [shoppingList, setShoppingList] = useLocalStorage("food-plan-shopping-list", [])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(false)
  const [countries, setCountries] = useState([])

  // Fetch categories
  const fetchCategories = async () => {
    try {
      setLoading(true)
      const res = await fetch(api.CATEGORIES_DESCRIPTION_URL)
      const data = await res.json()
      setCategories(data.categories)
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

  // Add to shopping list
  const addToShoppingList = (ingredient) => {
    let ingredientInList = shoppingList.find((item) => item.name === ingredient.name)
    if (ingredientInList) {
      ingredientInList.measure = `${ingredientInList
        .measure} + ${ingredient.measure}`
      ingredientInList.completed = false
      setShoppingList([...shoppingList])
    } else {
      let newIngredient = { ...ingredient, completed: false }
      setShoppingList([...shoppingList, newIngredient])
    }
  }

  // Remove from shopping list
  const removeFromShoppingList = (ingredient) => {
    const newShoppingList = shoppingList.filter((item) => item.name !== ingredient.name)
    setShoppingList(newShoppingList)
  }

  // Toggle completed shopping list item
  const toggleCompleted = (ingredient) => {
    const newShoppingList = shoppingList.map((item) => {
      if (item.name === ingredient.name) {
        return { ...item, completed: !item.completed }
      }
      return item
    })
    setShoppingList(newShoppingList)
  }

  // Edit shopping list item
  const editShoppingListItem = (ingredient, newIngredient) => {
    const newShoppingList = shoppingList.map((item) => {
      if (item.name === ingredient.name) {
        return newIngredient
      }
      return item
    })
    setShoppingList(newShoppingList)
  }                       

  // Remove all completed shopping list items
  const removeAllCompleted = () => {
    const newShoppingList = shoppingList.filter((item) => !item.completed)
    setShoppingList(newShoppingList)
  }

  // Remove all shopping list items
  const removeAll = () => {
    setShoppingList([])
  }

  // Get countries
  const fetchCountries = async () => {
    try {
      setLoading(true)
      const res = await fetch(api.COUNTRIES_URL)
      const data = await res.json()
      setCountries(data.meals.map((meal) => meal.strArea))
      setLoading(false)
    } catch (error) {
      console.error(error)
      setError(error)
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchCountries()
  }, [])

  
  return (
    <MealsContext.Provider
      value={{
        categories,
        favourites,
        error,
        setError,
        loading,
        setLoading,
        setFavourites,
        foodPlan,
        setFoodPlan,
        addToFavourites,
        removeFromFavourites,
        toggleFavourites,
        addToFoodPlan,
        removeFromFoodPlan,
        toggleFoodPlan,
        shoppingList,
        setShoppingList,
        addToShoppingList,
        editShoppingListItem,
        removeFromShoppingList,
        toggleCompleted,
        removeAllCompleted,
        removeAll,
        alert,
        setAlert,
        countries
      }}
    >
      {children}
    </MealsContext.Provider>
  )
}

MealsProvider.propTypes = {
  children: PropTypes.node.isRequired
}