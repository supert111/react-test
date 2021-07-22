import React from 'react';
import Cart from '../Cart/Cart';
import styles from '../AppBar/AppBar.module.css';

const AppBar = () => {
  return (
    <header className={styles.AppBar}>
      <Cart />
    </header>
  );
};

export default AppBar;