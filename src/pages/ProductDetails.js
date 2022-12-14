import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductsDetails } from '../services/api';
import '../styles/ProductDetails.css';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      result: '',
    };
  }

  componentDidMount() {
    this.getDetails();
  }

  getDetails = async () => {
    const { match } = this.props;
    const { id } = match.params;
    this.setState({
      result: await getProductsDetails(id),
      loading: false,
    });
  };

  render() {
    const { loading, result } = this.state;
    const {
      title,
      price,
      thumbnail,
      attributes,
      warranty,
    } = result;
    const { addToCart, match: { params: { id } } } = this.props;

    if (loading) {
      return (
        <p>Carregando...</p>
      );
    }
    return (
      <div className="main">
        <div className="header">
          <Link className="links" to="/">Voltar</Link>
          <Link
            data-testid="shopping-cart-button"
            className="links"
            to="/shoppingcart"
          >
            Meu carrinho
          </Link>
        </div>
        <div className="content">
          <div className="container">
            <h2 data-testid="product-detail-name">{ title }</h2>
            <p>{ `R$ ${price.toFixed(2)}`}</p>
            <img src={ thumbnail } alt={ title } />
          </div>
        </div>
        <div className="container">
          <h3>Especificações técnicas</h3>
          <ul>
            <li>{ warranty }</li>
            { attributes
              .map((ele, index) => (
                <li key={ index }>
                  { `${ele.name}: ${ele.value_name}` }
                </li>)) }
          </ul>
        </div>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ addToCart }
          value={ id }
          name={ JSON.stringify(result) } // adicionei esta linha
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductDetails;
