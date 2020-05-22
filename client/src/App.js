import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import ProductList from './components/ProductList';
import Cart from './components/Cart.js';
import NavBar from './components/NavBar';
import Login from './components/Login';

const App = () => {

  return (
    <>
      <header >
        <NavBar/>
      </header>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/cart" component={Cart} />
        <Route path="/productlist" component={ProductList} />
      </Switch>
    </>
  );
}

export default App;
