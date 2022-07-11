import React from 'react';
<<<<<<< HEAD
import ShoppingCartProductCard from '../components/ShoppingCartProductCard';
=======
import PropTypes from 'prop-types';
>>>>>>> 293d05ff578b1ef6ec42dc994290e236d30f9401

class ShoppingCart extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div>
<<<<<<< HEAD
        <h1>Carrinho de Compras</h1>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        <section>
          <ShoppingCartProductCard />
        </section>
        <p>Valor Total da Compra: R$ soma</p>
        <button
          type="button"
          onClick={ () => {} }
        >
          Finalizar Compra
        </button>
=======
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
>>>>>>> 293d05ff578b1ef6ec42dc994290e236d30f9401
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
