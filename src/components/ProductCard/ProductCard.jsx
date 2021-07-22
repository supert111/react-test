import styles from './ProductCard.module.css';

const ProductCard = ({ cards, onClick }) => {
  return (
    <ul className={styles.cardsBlock}>
        {
             cards.map(({ id, text, price}) =>  ( 
                <li key={id} onClick={()=>onClick(id) } className={styles.productCard}>
                    {/* <img id={id} src={webformatURL} alt="" className={styles.styles.productCard} /> */}
                    <p>{text}</p>
                    <p>{price}</p>
                    <button className={styles.buttonCard}>Add</button>
                </li>
            )) }
        
        {/* <div className={styles.productCard}>
            <p>dfggdfsgd</p>
        </div> */}
    </ul>
  );
};

export default ProductCard;