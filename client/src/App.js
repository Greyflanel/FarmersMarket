import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import axios from "axios";
import LandingPage from "./components/LandingPage";
import Products from "./components/Products";
import Cart from "./components/Cart.js";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProductContext from "./Contexts/ProductContext";
import CartContext from "./Contexts/CartContext";
import AuthContext from "./Contexts/AuthContext";
import Product from "./components/Product";
import Admin from "./components/Admin";
import PrivateRoute from "./components/PrivateRoute";


const App = () => {
                    const [productsList, setProductsList] = useState([]);
                    useEffect(() => {
                      const getProducts = () => {
                        axios
                          .get("http://localhost:5000")
                          .then((response) => {
                            setProductsList(response.data);
                          })
                          .catch((error) => {
                            console.error("Server Error", error);
                          });
                      };
                      getProducts();
                    }, []);
  
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

                    const [cart, setCart] = useState([]);
                    const addItem = (item) => {
                      setCart([...cart, item]);
                    };

                    return (
                      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
                        <ProductContext.Provider
                          value={{ addItem, productsList }}
                        >
                          <CartContext.Provider value={{ cart }}>
                            <NavBar />
                            <Switch>
                              <Route exact path="/" component={LandingPage} />
                              <Route path="/signup" component={Signup} />
                              <Route path="/login" component={Login} />
                              <Route path="/cart" component={Cart} />
                              <Route path="/productlist" component={Products} />
                              <Route path="/product" component={Product} />
                              <PrivateRoute path="/admin" component={Admin} />
                            </Switch>
                          </CartContext.Provider>
                        </ProductContext.Provider>
                      </AuthContext.Provider>
                    );
                  };

export default App;
