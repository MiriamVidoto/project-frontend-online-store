import React from 'react';
import ShoppingCartProductCard from '../components/ShoppingCartProductCard';

class ShoppingCart extends React.Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default ShoppingCart;
