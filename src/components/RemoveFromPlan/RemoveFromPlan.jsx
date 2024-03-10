import { useState } from 'react'
import { useMeals } from '../../hooks/useMeals'
import styles from './RemoveFromPlan.module.css'
import Tooltip from '../Tooltip/Tooltip'
import PropTypes from 'prop-types'

const RemoveFromPlan = ({ idMeal }) => {
  const { toggleFoodPlan } = useMeals()
  const [hovering, setHovering] = useState(false)
  const mouseOver = () => setHovering(true)
  const mouseOut = () => setHovering(false)

  return (
    <div className={styles.removeFromPlan}>
      <button
        className={styles.deleteBtn}
        onClick={() => toggleFoodPlan(idMeal)}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
      >
        <i className='fa fa-trash'></i>
        {hovering && (
          <Tooltip
            text='Remove'
            position='bottom'
          />
        )}
      </button>
    </div>
  )
}

RemoveFromPlan.propTypes = {
  idMeal: PropTypes.string.isRequired
}

export default RemoveFromPlan