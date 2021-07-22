import { Component } from 'react';
import ProductCard from '../components/ProductCard/ProductCard';
import styles from '../components/ProductCard/ProductCard';
// import API from '../api/data.api';
// import MoviesListView from '../components/MoviesListView/MoviesListView';


class HomePageViews extends Component {
    state = {
        cards: [  
          {id: 'id-1',  text: 'the best product', price: '4'},
          {id: 'id-2',  text: 'the best product', price: '4'},
          {id: 'id-3',  text: 'the best product', price: '4'},
          {id: 'id-4',  text: 'the best product', price: '4'},
          {id: 'id-5',  text: 'the best product', price: '4'},
          {id: 'id-6',  text: 'the best product', price: '4'},
        ]
      };

    // componentDidMount() {
    //     API.fetchPopularFilms()
    //     .then(results => {
    //         this.setState({ popularFilms: results })
    //     })
    // };

    render() {
        // const { popularFilms } = this.state;

        return (
            <section className={styles.container}>
                <h1> Trending today </h1>
                <ProductCard cards={this.state.cards} onClick={1}/>
            </section>
        )
    }
};

export default HomePageViews;