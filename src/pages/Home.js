import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from '../components/ProductCard';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [''],
      isLoading: false,
      searchTerm: '',
      categories: [],
    };
  }

  componentDidMount() {
    this.getCategoriesNames();
  }

  getCategoriesNames = async () => {
    this.setState({ categories: await getCategories() });
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
    });
  }

  render() {
    const { searchTerm, isLoading, products, categories } = this.state;
    return (
      <div>
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
        </div>
        <div className="main-content">
          <nav className="nav-content">
            { categories.map(({ name, id }) => (
              <NavLink to="" key={ id } data-testid="category">{ name }</NavLink>
            )) }
          </nav>
          <div className="product-content">
            {
              isLoading && <p>Carregando...</p>
            }
            {products.length === 0 ? <p>Nenhum produto foi encontrado</p>
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
        </div>
      </div>
    );
  }
}

export default Home;
