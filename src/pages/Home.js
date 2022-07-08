import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { getCategories } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.getCategoriesNames();
  }

  getCategoriesNames = async () => {
    this.setState({ categories: await getCategories() });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <div className="colum-content">
          <Link
            to="/shoppingcart"
            data-testid="shopping-cart-button"
          >
            Carrinho de Compras
          </Link>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
        <nav className="nav-content">
          { categories.map(({ name, id }) => (
            <NavLink to="" key={ id } data-testid="category">{ name }</NavLink>
          )) }
        </nav>
      </div>
    );
  }
}

export default Home;
