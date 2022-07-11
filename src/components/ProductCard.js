import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { title, thumbNail, price, key, cart, id } = this.props;
    return (
      <div data-testid="product">
        <Link
          to={ `/productdetails/${id}` }
          data-testid="product-detail-link"
          id={ id }
        >
          <h3>{ title }</h3>
          <img src={ thumbNail } alt={ title } />
          <p>{ price }</p>
        </Link>
        <button
          data-testid="product-add-to-cart"
          type="button"
          id={ key }
          price={ price }
          name={ title }
          onClick={ cart }
        >
          adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string,
  thumbNail: PropTypes.string,
  price: PropTypes.number,
  key: PropTypes.string,
  cart: PropTypes.func,
  id: PropTypes.string,
}.required;

export default ProductCard;
