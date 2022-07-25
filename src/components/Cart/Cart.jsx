import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import routes from '../../routes';
import styles from '../Cart/Cart.module.css';


const Cart = () => {
  const state = useSelector(state => state);
  const totalPriceCart = state.defaultUser.total;

  let activeStyle = {
    visibility: 'hidden',
  };

  return (
    <nav className="">
        <NavLink                      
            to={routes.cart}
            style={({ isActive })=> 
              isActive ? activeStyle : ({textDecoration: "none", display: 'block'})  
            }
        > 
        <div className={styles.wrapperPriceAndCart}>
        {  (totalPriceCart > 0 )
          ? <p className={styles.totalPrice}>{totalPriceCart} $</p>
          : <p className={styles.totalPrice}></p>
        }
            <button className={styles.buttonCart}><span className={styles.textCart}>Cart</span></button>
        </div>
        </NavLink>
    </nav>
  );
};

export default Cart;