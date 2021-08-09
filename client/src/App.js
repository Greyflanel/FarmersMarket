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
import Login from "./components/Login";
import Signup from "./components/Signup";
import Admin from "./components/Admin";
import PrivateRoute from "./components/PrivateRoute";
import Store from "./Store";


const App = () => {
  const [productsList, setProductsList] = useState([]);
  useEffect(() => {
    const getProducts = () => {
      axios
        .get("http://localhost:3000/api/products")
        .then((response) => {
          setProductsList(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getProducts();
  }, []);

  // const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  // const [authTokens, setAuthTokens] = useState(existingTokens);

  // const setTokens = (data) => {
  //   localStorage.setItem("tokens", JSON.stringify(data));
  //   setAuthTokens(data);
  // };

  return (
    <Store>
      <ProductContext.Provider value={{ productsList }}>
        <CartProvider>
          <NavBar />
          <Switch>
            <Route path="/register" component={Signup} />
            <Route path="/login" component={Login} />
            <Route exact path="/" component={LandingPage} />
            <Route path="/products/:id" component={Product} />
            <Route path="/products" component={Products} />
            <Route path="/authorize" component={AuthNav} />
            <Route path="/cart" component={ShoppingCart} />
            <PrivateRoute path="/admin" component={Admin} />
          </Switch>
        </CartProvider>
      </ProductContext.Provider>
    </Store>
  );
};

export default App;
