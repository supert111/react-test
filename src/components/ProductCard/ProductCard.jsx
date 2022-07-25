import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from '../../redux/productCards/productCards-actions';
import { incremented } from '../../redux/usersDefault/usersDefault-actions';
import styles from './ProductCard.module.css';
import webformatURL from '../../img/logo512.png'

const ProductCard = ({ cards }) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const handlClick = (element) => {
    const { name, id } = element.target;
    const findAddCard = cards.filter(card => (card.id === id));

    if(name === 'add') {
      state.defaultUser.orders.push(findAddCard[0])
      dispatch(addProduct(findAddCard[0]))
      dispatch(incremented(findAddCard))
    }
  }

  return (
    <div className={styles.container}>
      <ul className={styles.cardsBlock}>
        {
          cards.map(({ id, url, text, price, buttonAdd}) =>  ( 
                
            <li key={id} onClick={handlClick} className={styles.productCard}>
              <div>
                <img id={id} src={url=webformatURL} alt="" className={styles.imgCard} />
                  </div>
                  <div className={styles.wrapperCard}>
                    <h2 className={styles.titleCard}>{text}</h2>
                    <p className={styles.descriptionCard}>{text}</p>
                    <p className={styles.priceCard}>price: {price} $</p>
                    { buttonAdd 
                    ? <button disabled={buttonAdd} id={id} name='add'className={styles.buttonCard}><span className={styles.buttonCardAdded}>Added</span></button>
                    : <button disabled={buttonAdd} id={id} name='add'className={styles.buttonCard}>Add</button>}
                    
                  </div>
            </li>
          )) 
        }
      </ul>
    </div>
  );
};

export default ProductCard;