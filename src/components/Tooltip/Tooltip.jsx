import styles from './Tooltip.module.css'
import PropTypes from 'prop-types'

const Tooltip = ({ text, position }) => {
  return (
    <div
      className={position === 'top' ? styles.tooltipTop : styles.tooltipBottom}
    >
      <span>{text}</span>
    </div>
  )
}

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
}

export default Tooltip
