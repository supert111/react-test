import { Component } from 'react';
import ProductCard from '../components/ProductCard/ProductCard';
import styles from './HomePageView.module.css';

class HomePageViews extends Component {
    state = {
        cards: [  
          {id: 'id-1',  url: '', text: 'the best product', price: '4'},
          {id: 'id-2',  url: '', text: 'the best product', price: '4'},
          {id: 'id-3',  url: '', text: 'the best product', price: '4'},
          {id: 'id-4',  url: '', text: 'the best product', price: '4'},
          {id: 'id-5',  url: '', text: 'the best product', price: '4'},
          {id: 'id-6',  url: '', text: 'the best product', price: '4'},
        ]
      };

    render() {

        return (
            <section className={styles.sectionStyle}>
                {/* <h1> Test </h1> */}
                <ProductCard cards={this.state.cards} onClick={1}/>
            </section>
        )
    }
};

export default HomePageViews;