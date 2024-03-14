import { useNavigate, useSearchParams } from 'react-router-dom'
import styles from './SearchLetter.module.css'
import PropTypes from 'prop-types'

const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')

const SearchLetter = () => {

  const [searchParams, setSearchParams] = useSearchParams()
  const  navigate = useNavigate()
  const handleClick = (e) => {
    setSearchParams(searchParams.set('letter', e.target.value))
    navigate(`/filteredMeals?${searchParams}`)
  }
  return (
    <div className={styles.letters}>
      <p>Search by first letter</p>
      <div className={styles.lettersList}>
        {letters.map((letter) => (
        <button
          key={letter}
          className={styles.letter}
          value={letter}
          onClick={handleClick}
        >
          {letter.toUpperCase()}
        </button>
      ))}
      </div>
      
    </div>
  )
}

SearchLetter.propTypes = {
  letters: PropTypes.array
}

export default SearchLetter
