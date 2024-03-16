import Navbar from '../Navbar/Navbar'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header} data-testid='header'>
      <h1 className={styles.logo}>Food Planner</h1>
      <Navbar />
      <hr />
      <br />
    </header>
  )
}

export default Header