import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {

  const styleNavLink = ({ isActive }) => ({
    color: isActive ? 'red' : 'white'
  })

  return (
    <nav className={styles.navbar}>
      <NavLink to="/" style={styleNavLink}>Categories</NavLink>
      <NavLink to="/favourites" style={styleNavLink}>Favourites</NavLink>
      <NavLink to="/plan" style={styleNavLink}>My Plan</NavLink>
      <NavLink to="/shoppingList" style={styleNavLink}>Shopping List</NavLink>
      <NavLink to="/search" style={styleNavLink}>Search</NavLink>
    </nav>
  )
}

export default Navbar