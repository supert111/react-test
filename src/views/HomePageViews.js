import { Component } from 'react';
import { connect } from 'react-redux';
import ProductCard from '../components/ProductCard/ProductCard';
import styles from './HomePageView.module.css';


class HomePageViews extends Component {

    render() {
        return (
            <section className={styles.sectionStyle}>
                <ProductCard cards={this.props.cards} />
            </section>
        )
    }
};

const mapStateToProps = (state) => ({
    cards: state.products.cards
});
export default connect(mapStateToProps)(HomePageViews);