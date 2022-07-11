import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        { !products
          ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : (
            products.map(({ id, title, price, thumbnail }, index) => (
              <div key={ id }>
                <img src={ thumbnail } alt={ title } />
                <p data-testid="shopping-cart-product-name">{ title }</p>
                <p>{ price }</p>
                <p data-testid="shopping-cart-product-quantity">
                  Quantidade:
                  {' '}
                  {index}
                </p>
              </div>))
          ) }
      </div>
    );
  }
}

export default ShoppingCart;
