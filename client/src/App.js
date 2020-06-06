import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
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
  
  
                    const [user, setUser] = useState([]);
                    const [cart, setCart] = useState([]);
                    const addItem = (item) => {
                      setCart([...cart, item]);
                    };

                    return (
                      <AuthContext.Provider value={ false }>
                        <ProductContext.Provider
                          value={{ addItem, productsList }}
                        >
                          <CartContext.Provider value={{ cart }}>
                            <NavBar />
                            <Switch>
                              <PrivateRoute path="/admin" component={Admin} />
                              <Route exact path="/" component={LandingPage} />
                              <Route path="/signup" component={Signup} />
                              <Route path="/login" component={Login} />
                              <Route path="/cart" component={Cart} />
                              <Route path="/productlist" component={Products} />
                              <Route path="/product" component={Product} />
                            </Switch>
                          </CartContext.Provider>
                        </ProductContext.Provider>
                      </AuthContext.Provider>
                    );
                  };

export default App;
