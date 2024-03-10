import styles from './AddToPlanIcon.module.css'
import Tooltip from '../Tooltip/Tooltip'
import PropTypes from 'prop-types'
import { useMeals } from '../../hooks/useMeals'
import { useState } from 'react'

const AddToPlanIcon = ({ idMeal }) => {

  const { foodPlan, toggleFoodPlan } = useMeals()
  const [hovering, setHovering] = useState(false)
  const isAdded = foodPlan.includes(idMeal)

  const mouseOver = () => setHovering(true)
  const mouseOut = () => setHovering(false)

  return (
    <span
      className={`${isAdded ? styles.inPlan : styles.notInPlan}`}
      onClick={() => toggleFoodPlan(idMeal)}
      onMouseOver={mouseOver}
      onMouseOut={mouseOut}
    >
      <i className='fa fa-list'></i>
      {hovering && (
        <Tooltip
          text={isAdded ? 'Remove from plan' : 'Add to plan'}
          position='top'
        />
      )}
    </span>
  )
}

AddToPlanIcon.propTypes = {
  idMeal: PropTypes.string.isRequired
}

export default AddToPlanIcon