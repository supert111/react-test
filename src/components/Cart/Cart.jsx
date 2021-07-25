import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from '../Cart/Cart.module.css';


const Cart = () => {
  return (
    <nav className="">
        <NavLink            
            exact
            to={routes.cart}
            style={{ textDecoration: 'none' }}
        >
            <button className={styles.buttonCart}><span className={styles.textCart}>Cart</span></button>
        </NavLink>
    </nav>
  );
};

export default Cart;