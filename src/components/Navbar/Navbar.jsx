import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const setActive = ({isActive}) => isActive ? styles.active : styles.item

const Navbar = () => {
  return (
    <nav>
      <div className={styles.item}>
        <NavLink to='/profile' className={setActive}>Profile</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/messages' className={setActive}>Messages</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/news' className={setActive}>News</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/settings' className={setActive}>Settings</NavLink>
      </div>
    </nav>
  )
}

export default Navbar