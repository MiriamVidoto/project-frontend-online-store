import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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
    this.setState({
      isLoading: false,
      products: result.results,
      searchTerm: '',
    });
  }

  getCategory = (name) => {
    this.setState({
      searchTerm: name,
    }, () => this.getProducts());
  }

  // handleShoppingCart = ({ target }) => {
  //   const { name, value, id } = target;
  //   const products = {
  //     title: name,
  //     key: id,
  //     price: value,
  //   };
  //   this.setState((prevent) => ({
  //     ShoppingCart: [...prevent.ShoppingCart, products],
  //   }));
  // }

  render() {
    const { searchTerm, isLoading, products, categories } = this.state;
    const { addToCart } = this.props;
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
              <NavLink
                to=""
                key={ id }
                data-testid="category"
                onClick={ () => this.getCategory(name) }
              >
                { name }
              </NavLink>
            )) }
          </nav>
          <div className="product-content">
            {
              isLoading && <p>Carregando...</p>
            }
            {products.length === 0 ? <p>Nenhum produto foi encontrado</p>
              : (
                products.map((product, index) => (
                  <ProductCard
                    key={ index }
                    title={ product.title }
                    thumbNail={ product.thumbnail }
                    price={ product.price }
                    cart={ addToCart }
                    id={ product.id }
                    name={ JSON.stringify(product) } // adicionei o name para utilizar no shoppingcart
                  />
                ))
              )}
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default Home;
