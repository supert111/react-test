import styles from './ProductCardOrder.module.css';
import webformatURL from '../../img/logo512.png'

const ProductCardOrder = ({ cards, onClick }) => {
  
  return (
    <div className={styles.orderCardsBlock}>
      <ul className={styles.cardsBlock}>
        {
          cards.map(({ id, url, text, price, orderQuantity}) =>  ( 
              <li key={id} className={styles.productCard}>
                <div>
                  <img id={id} src={url=webformatURL} alt="" className={styles.imgCard} />
                </div>
                <div className={styles.wrapperCard}>
                  <h2 className={styles.titleCard}>{text}</h2>
                  <p className={styles.descriptionCard}>{text}</p>
                  <p className={styles.priceCard}>price: {price} $</p>
                </div>
                
                <div className={styles.orderQuantity}>
                 <button id={id}
                  onClick={onClick} 
                  name='decrement' 
                  className={styles.buttonCard}>-</button>
                  <p style={{marginRight: '20px'}}>{orderQuantity}</p>
                  <button id={id}
                  onClick={onClick} 
                  name='increment' 
                  className={styles.buttonCard}>+</button>
                </div>
              </li>
            )) 
        }
      </ul>
    </div>
  );
};

export default ProductCardOrder;