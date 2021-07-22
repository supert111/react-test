import { Component } from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
// import styles from './HomePageView.module.css';

class CartPageViews extends Component {
    // state = {
    //     // cards: [  
    //     //   {id: 'id-1',  url: '', text: 'the best product', price: '4'},
    //     //   {id: 'id-2',  url: '', text: 'the best product', price: '4'},
    //     //   {id: 'id-3',  url: '', text: 'the best product', price: '4'},
    //     //   {id: 'id-4',  url: '', text: 'the best product', price: '4'},
    //     //   {id: 'id-5',  url: '', text: 'the best product', price: '4'},
    //     //   {id: 'id-6',  url: '', text: 'the best product', price: '4'},
    //     // ]
    //   };

    // componentDidMount() {
    //     API.fetchPopularFilms()
    //     .then(results => {
    //         this.setState({ popularFilms: results })
    //     })
    // };
    submit = values => {
        // print the form values to the console
        console.log(values)
    }

    render() {
        return (
            <section className=''>
                <h1> Today </h1>
                <ContactForm onSubmit={this.submit} />
                {/* <ProductCard cards={this.state.cards} onClick={1}/> */}
            </section>
        )
    }
}

export default CartPageViews;