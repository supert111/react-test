import styles from './ProductCardOrder.module.css';
import webformatURL from '../../img/logo512.png'

const ProductCardOrder = ({ cards, onClick, count }) => {
  return (
    <div className={styles.container}>
          <ul className={styles.cardsBlock}>
        {
             cards.map(({ id, url, text, price}) =>  ( 
                
                <li key={id} 
                // onClick={()=>onClick(id) } 
                className={styles.productCard}>
                    <div>
                      <img id={id} src={url=webformatURL} alt="" className={styles.imgCard} />
                    </div>
                    <div className={styles.wrapperCard}>
                      <h2 className={styles.titleCard}>{text}</h2>
                      <p className={styles.descriptionCard}>{text}</p>
                      <p className={styles.priceCard}>{price}</p>
                    </div>
                      <button onClick={()=>onClick(id)} name='decrement' className={styles.buttonCard}>-</button>
                      <p style={{marginRight: '20px'}}>1</p>
                      <button onClick={()=>onClick(count+1)} name='increment' className={styles.buttonCard}>+</button>
                </li>
            )) }
        </ul>
    </div>
  );
};

export default ProductCardOrder;