import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { title, thumbNail, price, key, cart } = this.props;
    return (
      <div data-testid="product">
        <h3>{ title }</h3>
        <img src={ thumbNail } alt={ title } />
        <p>{ price }</p>
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
}.required;

export default ProductCard;
