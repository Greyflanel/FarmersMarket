import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import axios from "axios";
import LandingPage from "./components/LandingPage";
import Products from "./components/Products";
import Cart from "./components/Cart.js";
import AuthNav from "./components/nav-bar";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProductContext from "./Contexts/ProductContext";
import CartContext from "./Contexts/CartContext";
import AuthContext from "./Contexts/AuthContext";
import Product from "./components/Product";
import Admin from "./components/Admin";
import PrivateRoute from "./components/PrivateRoute";
import Store from "./Store";

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
                            console.log(error)
                          });
                      };
                      getProducts();
                    }, []);
  

                    const [cart, setCart] = useState([]);
                    const addItem = (item) => {
                      setCart([...cart, item]);
                    };

                    return (
                      
                        <ProductContext.Provider
                          value={{ addItem, productsList }}
                        >
                          <CartContext.Provider value={{ cart }}>
                            <NavBar />
                            <Switch>
                              <Route exact path="/" component={LandingPage} />
                              <Route path="/signup" component={Signup} />
                              <Route path="/authorize" component={AuthNav} />
                              <Route path="/cart" component={Cart} />
                              <Route path="/products" component={Products} />
                            <Route path="/products/:id"
                              component={Product}
                            />
                            </Switch>
                          </CartContext.Provider>
                        </ProductContext.Provider>
                      
                    );
                  };

export default App;
