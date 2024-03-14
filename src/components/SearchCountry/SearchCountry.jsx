import { useNavigate, useSearchParams } from 'react-router-dom'
import { useMeals } from '../../hooks/useMeals'
import styles from './SearchCountry.module.css'
import PropTypes from 'prop-types'

const SearchCountry = () => {

  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const { countries } = useMeals()
  
  const handleClick = (e) => {
    setSearchParams(searchParams.set('country', e.target.value))
    navigate(`/filteredMeals?${searchParams}`)
  }

  return (
    <div className={styles.countries}>
      <h4>Search by country</h4>
      <div className={styles.countriesList}>
        {countries.map((country) => (
        <button
          key={country}
          className={styles.country}
          onClick={handleClick}
          value={country}
        >
          {country}
        </button>
      ))}
      </div>
      
    </div>
  )
}

SearchCountry.propTypes = {
  countries: PropTypes.array
}

export default SearchCountry