import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import ProductList from './pages/ProductList';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ ProductList } />
      </BrowserRouter>
    );
  }
}

export default App;
