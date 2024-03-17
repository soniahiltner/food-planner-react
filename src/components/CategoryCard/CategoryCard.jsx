import styles from './CategoryCard.module.css'
import PropTypes from 'prop-types'
import formatText from '../../helpers/formatText'
import { Link } from 'react-router-dom'

const CategoryCard = ({ category }) => {
  
  return (
    <div className={styles.categoryCard} data-testid='category-card'>
      <Link to={`/category/${category.strCategory}`} className={styles.link} data-testid='category-card-link'>
        <img
        src={category.strCategoryThumb}
        alt={category.strCategory}
        className={styles.categoryImage}
      />
      
      </Link>
      <h3 className={styles.categoryName}>{category.strCategory}</h3>
      <p className={styles.categoryDescription}>
        {category.strCategoryDescription.length > 0
          ? formatText(category.strCategoryDescription)
          : category.strCategoryDescription}
      </p>
    </div>
  )
}

CategoryCard.propTypes = {
  category: PropTypes.shape({
    strCategoryThumb: PropTypes.string.isRequired,
    strCategory: PropTypes.string.isRequired,
    strCategoryDescription: PropTypes.string.isRequired
  }).isRequired
}

export default CategoryCard
