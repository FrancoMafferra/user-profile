import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/bart_simpson.jpg" alt="Profile Picture" className={styles.profileImage} />
      <h1 className={styles.userName}>Franco Mafferra</h1>
    </header>
  );
};

export default Header;
