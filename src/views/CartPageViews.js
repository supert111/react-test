import { Component } from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import ProductCardOrder from '../components/ProductCardOrder/ProductCardOrder';
import styles from './CartPageViews.module.css';

let total = 0;
class CartPageViews extends Component {
    
    state = {
        cards: [  
          {id: 'id-1',  url: '', text: 'the best product', price: '4', quantity: 0,},
          {id: 'id-2',  url: '', text: 'the best product', price: '14', quantity: 0,},
        //   {id: 'id-3',  url: '', text: 'the best product', price: '4'},
        //   {id: 'id-4',  url: '', text: 'the best product', price: '4'},
        //   {id: 'id-5',  url: '', text: 'the best product', price: '4'},
        //   {id: 'id-6',  url: '', text: 'the best product', price: '4'},
        ],
        customer: [],
    };

    handleClick = (element) => {
        const { name } = element.target;
        if(name === 'decrement') {
            total+= -1;
        } 
        if(name === 'increment') {
            total+= 1;
        } 
        console.log('quantity', total)
    }
  
    submit = (values) => {
        const { firstName, lastName, address, phone } = values;
        const customerData = {firstName, lastName, address, phone}; 
        this.setState ({customer: [...this.state.customer, customerData]});

        console.log('values', customerData)
    }

    render() {
            console.log('this.state', this.state)
            console.log('total', this.state.cards.quantity)
        return (
            <section className={styles.styleSection}>
                <div className={styles.container}> 
                    <div className={styles.wrapperBlockCart}>
                            <ProductCardOrder cards={this.state.cards} onClick={this.handleClick} quantity={1}/>
                            <ContactForm onSubmit={this.submit} />     
                    </div>
                    <p>Total: 3453$</p>
                </div>
            </section>
        )
    }
}

export default CartPageViews;