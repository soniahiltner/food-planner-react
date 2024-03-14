import SearchCountry from '../../components/SearchCountry/SearchCountry'
import SearchItem from '../../components/SearchItem/SearchItem'
import SearchLetter from '../../components/SearchLetter/SearchLetter'
import styles from './Search.module.css'

const Search = () => {

  
  return (
    <div className={styles.search}>
      <div className={styles.searchItems}>
        <SearchItem
        filter='name'
      />
      
      <SearchItem
        filter='ingredient'
      />
      </div>
      
      <SearchLetter />
      <SearchCountry />
    </div>
  )
}

export default Search