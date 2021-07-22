import styles from './ProductCard.module.css';
import webformatURL from '../../img/logo512.png'

const ProductCard = ({ cards, onClick }) => {
  return (
    <div className={styles.container}>
          <ul className={styles.cardsBlock}>
        {
             cards.map(({ id, url, text, price}) =>  ( 
                
                <li key={id} onClick={()=>onClick(id) } className={styles.productCard}>
                    <div>
                      <img id={id} src={url=webformatURL} alt="" className={styles.imgCard} />
                    </div>
                    <div className={styles.wrapperCard}>
                      <h2 className={styles.titleCard}>{text}</h2>
                      <p className={styles.descriptionCard}>{text}</p>
                      <p className={styles.priceCard}>{price}</p>
                      <button className={styles.buttonCard}>Add</button>
                    </div>
                </li>
            )) }
    </ul>
    </div>
  );
};

export default ProductCard;