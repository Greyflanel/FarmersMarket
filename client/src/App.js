import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import ProductList from './components/ProductList';
import products from './components/ProductList';
import Cart from './components/Cart.js';
import NavBar from './components/NavBar';
import Login from './components/Login';
import ProductContext from './Contexts/ProductContext';
import CartContext from './Contexts/CartContext';
import Product from './components/Product';

const App = () => {
 
  const [cart, setCart] = useState([]);
  const addItem = item => {
    setCart([...cart, item]);
  };

  return (
    <ProductContext.Provider value={{addItem, products }}>
      <CartContext.Provider value={{ cart }}>
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={Login} />
          <Route path="/cart" component={Cart} />
          <Route path="/productlist" component={ProductList} />
          <Route path="/product" component={Product} />
        </Switch>
      </CartContext.Provider>
    </ProductContext.Provider>
  );
};

export default App;
