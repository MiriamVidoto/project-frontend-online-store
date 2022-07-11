import React from 'react';
import '../styles/ShoppingCartProductCard.css';

class ShoppingCartProductCard extends React.Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
    };
  }

  handleMinQuantity = (number) => ((number < 1) ? 1 : number)

  handleQuantity = ({ target }) => {
    if (target.id === 'increase') {
      this.setState((prevState) => ({
        quantity: prevState.quantity + 1,
      }));
    } else {
      this.setState((prevState) => ({
        quantity: this.handleMinQuantity(prevState.quantity - 1),
      }));
    }
  }

  render() {
    const { quantity } = this.state;
    return (
      <div className="product-info-content">
        <button
          type="button"
        >
          Excluir
        </button>
        <img src="Imagem" alt="Imagem" />
        <p>Nome</p>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ this.handleQuantity }
          id="decrease"
        >
          -
        </button>
        <p className="quantity">{ quantity }</p>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ this.handleQuantity }
          id="increase"
        >
          +
        </button>
        <p>1000</p>
      </div>
    );
  }
}

export default ShoppingCartProductCard;
