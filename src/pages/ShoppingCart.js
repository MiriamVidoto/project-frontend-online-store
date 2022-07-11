import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        { !products ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : (
            products.map((product) => <p>{ product.title }</p>)
          ) }
      </div>
    );
  }
}

export default ShoppingCart;
