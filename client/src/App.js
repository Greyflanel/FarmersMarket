import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './assets/caseofstrawberries-johnny-martinez-lBIFDzYwbDo-unsplash.jpg';
import './App.css';
import LandingPage from './components/LandingPage';
import ProductList from './components/ProductList';

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <LandingPage/>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ProductList/>
    </div>
  );
}

export default App;
