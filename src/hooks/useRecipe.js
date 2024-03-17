import { useCallback, useEffect, useState } from 'react'
import api from '../helpers/apis'

export const useRecipe = ( id ) => {
  const [recipe, setRecipe] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const getRecipe = useCallback(async () => {
    try {
      setLoading(true)
      const res = await fetch(`${api.SEARCHID_URL}${id}`)
      const data = await res.json()
      setRecipe(data.meals[0])
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }, [id])

  useEffect(() => {
    getRecipe(id)
  }, [id, getRecipe])

  return { recipe, loading, error }
}