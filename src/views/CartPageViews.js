import { Component } from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import ProductCardOrder from '../components/ProductCardOrder/ProductCardOrder';
import styles from './CartPageViews.module.css';

class CartPageViews extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',

    };
    
    // componentDidUpdate(prevProps, prevState) {
    //     this.state = {firstName, lastName, email}
    // }

    // handleChange = (element) => {
    //     const { name, value } = element.target;
    //     this.setState ({ [name]: value }); 
    // };
    state = {
        cards: [  
          {id: 'id-1',  url: '', text: 'the best product', price: '4'},
          {id: 'id-2',  url: '', text: 'the best product', price: '14'},
        //   {id: 'id-3',  url: '', text: 'the best product', price: '4'},
        //   {id: 'id-4',  url: '', text: 'the best product', price: '4'},
        //   {id: 'id-5',  url: '', text: 'the best product', price: '4'},
        //   {id: 'id-6',  url: '', text: 'the best product', price: '4'},
        ],
        count: 0,
    };

    handleClick = (element) => {
        // const { name } = element.target;
        console.log({element})
        // this.setState(state => (cards, count));
    }

    submit = (values) => {
        // print the form values to the console
        const { firstName, lastName, email } = values;
            this.setState ({ firstName, lastName, email, }); 
        console.log('values', values)
    }
    // componentDidMount() {
        //     API.fetchPopularFilms()
        //     .then(results => {
            //         this.setState({ popularFilms: results })
            //     })
            // };
            // console.log(submit)
            render() {
                console.log('this.state', this.state)
        return (
            <section className={styles.styleSection}>
                <div className={styles.container}> 
                    <div className={styles.wrapperBlockCart}>
                        {/* <div className={styles.wrapperBlockProductCart}> */}
                            <ProductCardOrder cards={this.state.cards} onClick={this.handleClick} count={this.state.count}/>
                        {/* </div> */}
                        {/* <div> */}
                            <ContactForm onSubmit={this.submit} />     
                        {/* </div> */}
                    </div>
                    <p>Total: 3453$</p>
                </div>

                {/* <ProductCard cards={this.state.cards} onClick={1}/> */}
            </section>
        )
    }
}

export default CartPageViews;