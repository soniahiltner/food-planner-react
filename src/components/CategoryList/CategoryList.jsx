import { useMeals } from '../../hooks/useMeals'
import CategoryCard from '../CategoryCard/CategoryCard'
import Loader from '../Loader/Loader'
import styles from './CategoryList.module.css'

const CategoryList = () => {
  const { categories, loading, error } = useMeals()
  
  if (loading) {
    return <Loader />
  }
  if (error) {
    return <h1 style={{ textAlign: 'center' }}>Error: {error}</h1>
  }
  
  return (
    <div className={styles.grid} data-testid='category-list'>
      {categories && categories.length === 0 && (
        <h1 style={{ textAlign: 'center' }}>No categories found</h1>
      )}
      {categories.map(category => (
        <CategoryCard key={category.idCategory} category={category} />
      ))}
    </div>
  )
}

export default CategoryList
