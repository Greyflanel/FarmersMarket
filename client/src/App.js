import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import axios from "axios";
import LandingPage from "./components/LandingPage";
import Products from "./components/Products";
import {ShoppingCart} from "./components/ShoppingCart.js";
import AuthNav from "./components/nav-bar";
import NavBar from "./components/NavBar";
import ProductContext from "./Contexts/ProductContext";
import { CartProvider } from "./Contexts/CartContext";
import Product from "./components/Product";

const App = () => {
  const [productsList, setProductsList] = useState([]);
  useEffect(() => {
    const getProducts = () => {
      axios
        .get("http://localhost:4000/api/products")
        .then((response) => {
          setProductsList(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getProducts();
  }, []);

  

  return (
    <ProductContext.Provider value={{ productsList }}>
      <CartProvider>
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/products/:id" component={Product}/>
          <Route path="/products" component={Products} />
          <Route path="/authorize" component={AuthNav} />
          <Route path="/cart" component={ShoppingCart} />
        </Switch>
      </CartProvider>
    </ProductContext.Provider>
  );
};

export default App;
