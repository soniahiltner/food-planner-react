import { useMeals } from '../../hooks/useMeals'
import CategoryCard from '../CategoryCard/CategoryCard'
import styles from './CategoryList.module.css'

const CategoryList = () => {
  const { categories }= useMeals()

  return (
    <div className={styles.grid}>
      {categories.map(category => (
        <CategoryCard key={category.idCategory} category={category} />
      ))}
    </div>
  )
}

export default CategoryList
