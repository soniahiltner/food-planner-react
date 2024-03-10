import { useMeals } from '../../hooks/useMeals'
import styles from './DoneButton.module.css'
import PropTypes from 'prop-types'

const DoneButton = ({ ingredient }) => {

  const { toggleCompleted } = useMeals()
  return (
    <button 
      className={ingredient.completed ? styles.done : styles.pending}
      onClick={() => toggleCompleted(ingredient)}
    >
      {ingredient.completed ? (
        <span>&#10004;</span>
      ) : (
          <span>
            Pending
        </span>
      )}
    </button>
  )
}

DoneButton.propTypes = {
  ingredient: PropTypes.shape({
    name: PropTypes.string.isRequired,
    measure: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired
}

export default DoneButton