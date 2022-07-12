import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import ShoppingCart from './pages/ShoppingCart';
// import { getProductsDetails } from './services/api';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cartProducts: [],
    };
  }

  addToCart = ({ target }) => { // retirei o async
    // const product = await getProductsDetails(target.value);
    const product = JSON.parse(target.name);
    const { id, title, price, thumbnail } = product;
    this.setState((prevState) => ({
      cartProducts: (prevState.cartProducts.some((item) => item.id === id))
        ? prevState.cartProducts
        : [...prevState.cartProducts, { id, title, price, thumbnail }],
    }));
  }

  render() {
    const { cartProducts } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ (props) => (<Home
              { ...props }
              addToCart={ this.addToCart }
            />) }
          />
          <Route
            exact
            path="/shoppingcart"
            render={ (props) => (<ShoppingCart
              { ...props }
              products={ cartProducts }
            />) }
          />
          <Route
            path="/productdetails/:id"
            render={ (props) => (<ProductDetails
              { ...props }
              addToCart={ this.addToCart }
            />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
