import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      isLoading: false,
      searchTerm: '',
      searchResult: '',
    };
  }

  onInputChange = ({ target }) => {
    this.setState({
      searchTerm: target.value,
    });
  }

  getProducts = async () => {
    const { searchTerm } = this.state;
    this.setState({
      isLoading: true,
    });
    const result = await getProductsFromCategoryAndQuery(searchTerm);
    console.log(searchTerm);
    this.setState({
      isLoading: false,
      products: result.results,
      searchTerm: '',
      searchResult: result.results.length === 0 && 'Nenhum produto foi encontrado',
    });
    console.log(result.results);
  }

  render() {
    const { searchTerm, isLoading, products, searchResult } = this.state;
    return (
      <div className="colum-content">
        <Link
          to="/shoppingcart"
          data-testid="shopping-cart-button"
        >
          Carrinho de Compras
        </Link>
        <label htmlFor="search">
          <input
            id="search"
            data-testid="query-input"
            value={ searchTerm }
            onChange={ this.onInputChange }
          />
        </label>
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.getProducts }
        >
          Buscar
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        {
          searchResult.length === 0
          && <p>{searchResult}</p>
        }
        {isLoading ? 'Carregando...'
          : (
            products.map((product) => (
              <ProductCard
                key={ product.id }
                title={ product.title }
                thumbNail={ product.thumbnail }
                price={ product.price }
              />
            ))
          )}
      </div>
    );
  }
}

export default Home;
