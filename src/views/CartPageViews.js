import { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from '../components/ContactForm/ContactForm';
import ProductCardOrder from '../components/ProductCardOrder/ProductCardOrder';
import styles from './CartPageViews.module.css';
import {incremented, decremented, deleted} from '../redux/usersDefault/usersDefault-actions';
import { buttonReset } from '../redux/productCards/productCards-actions';

class CartPageViews extends Component {

    handleClick = (element) => {
        const { name, id } = element.target;
        const findOrderCard = this.props.cards.filter(card => (card.id === id));

        if (findOrderCard[0].orderQuantity === 1) {
            if (name === 'decrement') {
                this.props.decrement(findOrderCard);
                this.props.buttonRes(findOrderCard[0]);
                return this.props.delete(findOrderCard)
            } 
        } 
        
        if (name === 'increment') {
            this.props.increment(findOrderCard);
        } 
        
        if (name === 'decrement') {
            this.props.decrement(findOrderCard);
        } 
    }

    handleGoBack = () => {
        window.history.go(-1)  
    }

    render() {

        return (
            <section className={styles.styleSection}>
                <div className={styles.container}> 
                    <button className={styles.button} type="button" onClick={this.handleGoBack}>
                        🡸 Go back
                    </button>
                    <div className={styles.wrapperBlockCart}>
                            <ProductCardOrder cards={this.props.cards} onClick={this.handleClick} />
                            {
                                (this.props.cards.length > 0) ? <ContactForm buttonDisabled = 'active'/> 
                                    : <ContactForm />
                            }
                                 
                    </div>
                    { (this.props.totalPrice !== 0) 
                    ? <p className={styles.priceInfo}>Total: {this.props.totalPrice}$</p>
                    : <p className={styles.priceInfo}>Your cart is empty (</p>}
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    cards: state.defaultUser.orders,
    totalPrice: state.defaultUser.total
})

const mapDispatchToProps = dispatch => ({
    increment: (event) => dispatch(incremented(event)),
    decrement: (event) => dispatch(decremented(event)),
    delete: (event) => dispatch(deleted(event)),
    buttonRes: (event) => dispatch(buttonReset(event)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartPageViews);