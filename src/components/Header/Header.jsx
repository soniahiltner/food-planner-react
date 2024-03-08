import Navbar from '../Navbar/Navbar'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.logo}>Food Planner</h1>
      <Navbar />
      <hr />
      <br />
    </div>
  )
}

export default Header