import React from 'react';
import '../styles/ShoppingCartProductCard.css';
import PropTypes from 'prop-types';

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
    const { thumbnail, title, price } = this.props;
    return (
      <div className="product-info-content">
        <button
          type="button"
        >
          Excluir
        </button>
        <img src={ thumbnail } alt={ title } />
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ this.handleQuantity }
          id="decrease"
        >
          -
        </button>
        <p
          data-testid="shopping-cart-product-quantity"
          className="quantity"
        >
          { quantity }
        </p>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ this.handleQuantity }
          id="increase"
        >
          +
        </button>
        <p>{(price * quantity).toFixed(2)}</p>
      </div>
    );
  }
}

ShoppingCartProductCard.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
}.isRequired;

export default ShoppingCartProductCard;
