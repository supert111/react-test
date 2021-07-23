import { Component } from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
// import styles from './HomePageView.module.css';

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
            <section className=''>
                <h1> Today </h1>
                <ContactForm onSubmit={this.submit} />
                {/* <ProductCard cards={this.state.cards} onClick={1}/> */}
            </section>
        )
    }
}

export default CartPageViews;