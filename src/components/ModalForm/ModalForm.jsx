import styles from './ModalForm.module.css'
import PropTypes from 'prop-types'

const ModalForm = ({ setModal, handleSubmit, defaultName, defaultMeasure, legend, submitBtn }) => {
  return (
    <div
      className={styles.modal}
      onClick={() => setModal(false)}
    >
      <form
        className={styles.form}
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
      >
        <legend>{legend}</legend>
        <div className={styles.input}>
          <label htmlFor='name'>Name</label>
          <input
            name='name'
            defaultValue={defaultName}
            required
          />
          <label htmlFor='measure'>Measure</label>
          <input
            name='measure'
            defaultValue={defaultMeasure}
            required
          />
        </div>
        <div className={styles.btnContainer}>
          <button
            type='button'
            className={`${styles.button} ${styles.cancelBtn}`}
            onClick={() => setModal(false)}
          >
            Cancel
          </button>
          <button
            type='submit'
            className={`${styles.button} ${styles.submitBtn}`}
          >
            {submitBtn}
          </button>
        </div>
      </form>
    </div>
  )
}

ModalForm.propTypes = {
  setModal: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  defaultName: PropTypes.string,
  defaultMeasure: PropTypes.string,
  legend: PropTypes.string.isRequired,
  submitBtn: PropTypes.string.isRequired
}

export default ModalForm