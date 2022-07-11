import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        { products.length === 0
          ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : (
            products.map(({ title, price, thumbnail }, i) => (
              <div key={ i }>
                <img src={ thumbnail } alt={ title } />
                <p data-testid="shopping-cart-product-name">{ title }</p>
                <p>{ price }</p>
                <p data-testid="shopping-cart-product-quantity">
                  Quantidade: 1
                </p>
              </div>))
          ) }
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.number,
      thumbnail: PropTypes.string,
    }),
  ).isRequired,
};

export default ShoppingCart;
