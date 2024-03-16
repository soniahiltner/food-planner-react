import { useEffect, useState } from 'react'
import { useMeals } from '../../hooks/useMeals'
import styles from './Plan.module.css'
import api from '../../helpers/apis'
import MenuItem from '../../components/MenuItem/MenuItem'

const Plan = () => {

  const { foodPlan } = useMeals()
  const [menus, setMenus] = useState([])

  // Get menus from the API
  useEffect(() => {
    const fetchMenus = async () => {
      const menus = await Promise.all(
        foodPlan.map(async (id) => {
          const response = await fetch(`${api.SEARCHID_URL}${id}`)
          const data = await response.json()
          return data.meals[0]
        })
      )
      setMenus(menus)
    }
    fetchMenus()
  }, [foodPlan])

  return (
    <div className={styles.plan} data-testid='plan-page'>
      <h1>Menus</h1>
      {foodPlan.length === 0 && <p>No menus yet</p>}
      <div className={styles.menuList}>
        {menus.map((meal) => (
          <MenuItem key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  )
}

export default Plan