import { useCallback, useEffect, useState } from 'react'

export const useFetch = (url, param) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const getData = useCallback(async () => {
    try {
      setLoading(true)
      const response = await fetch(url + param)
      if (!response.ok) {
        throw new Error('Error fetching data')
      }
      const data = await response.json()
      setData(data.meals)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }, [url, param])

  useEffect(() => {
    getData()
  }, [getData])

  return { data, loading, error }
}
