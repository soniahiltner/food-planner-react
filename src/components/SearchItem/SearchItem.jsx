import styles from './SearchItem.module.css'
import { Link, useSearchParams } from 'react-router-dom'
import PropTypes from 'prop-types'

const SearchItem = ({ filter }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const handleChange = (e) => {
    setSearchParams(searchParams.set(filter, e.target.value))
  }

  return (
    <form className={styles.search}>
      <label
        htmlFor='search'
        className={styles.label}
      >
        Search by {filter}
      </label>
      <input
        type='text'
        id='search'
        name={filter}
        className={styles.input}
        value={searchParams.get(filter) || ''}
        onChange={handleChange}
      />
      <Link
        className={styles.button}
        to={`/filteredMeals?${searchParams}`}>
        <i className='fas fa-search'></i>
      </Link>
    </form>
  )
}

SearchItem.propTypes = {
  filter: PropTypes.string.isRequired
}

export default SearchItem
