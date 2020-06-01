import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import axios from "axios";
import LandingPage from "./components/LandingPage";
import Products from "./components/Products";
import Cart from "./components/Cart.js";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import ProductContext from "./Contexts/ProductContext";
import CartContext from "./Contexts/CartContext";
import UserContext from "./Contexts/UserContext";
import Product from "./components/Product";

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
                    const [user, setUser] = useState([]);
                    const [cart, setCart] = useState([]);
                    const addItem = (item) => {
                      setCart([...cart, item]);
                    };

                    return (
                      <UserContext.Provider value={{ user }}>
                        <ProductContext.Provider
                          value={{ addItem, productsList }}
                        >
                          <CartContext.Provider value={{ cart }}>
                            <NavBar />
                            <Switch>
                              <Route exact path="/" component={LandingPage} />
                              <Route path="/login" component={Login} />
                              <Route path="/cart" component={Cart} />
                              <Route path="/productlist" component={Products} />
                              <Route path="/product" component={Product} />
                            </Switch>
                          </CartContext.Provider>
                        </ProductContext.Provider>
                      </UserContext.Provider>
                    );
                  };

export default App;
