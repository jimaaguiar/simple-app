import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';

function Navbar() {
  return (
    <nav className={`navbar navbar-light bg-light ${styles.navbar}`}>
      <ul className={`navbar-nav ${styles.navbarList}`}>
        <li className={`nav-item ${styles.navItem}`}>
         <HomeRoundedIcon  className={styles.icon} data-testid="home-icon"/>
          <Link className="nav-link" to="/home">Home</Link>
        </li>
        <li className={`nav-item ${styles.navItem}`}>
          <AssignmentOutlinedIcon className={styles.icon} data-testid="tasks-icon"/>
          <Link className="nav-link" to="/tasks">Tasks</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar