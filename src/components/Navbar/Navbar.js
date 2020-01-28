import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navItemContainer}>
        <li className={styles.navItem}>
          <Link to='/calculator'>Calculadora</Link>
        </li>
        <li className={styles.navItem}>
          <Link to='/choices'>Choices</Link>
        </li>
        <li className={styles.navItem}>
          <Link to='/images'>Images</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
