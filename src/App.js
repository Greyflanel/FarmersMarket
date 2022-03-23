import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { productList } from "./components/server.js";
import LandingPage from "./components/LandingPage.js";
import Products from "./components/Products";
import {ShoppingCart} from "./components/ShoppingCart.js";
import NavBar from "./components/NavBars";
import ProductContext from "./Contexts/ProductContext.js";
import {AuthProvider} from "./Contexts/AuthContext.js";
import { CartProvider } from "./Contexts/CartContext.js";
import Product from "./components/Product.js";
import ExternalApi from "./ExternalApi.js";


const App = () => {
  
  const [productsList, setProductsList] = useState(productList);

  return (
    <AuthProvider>
      <ProductContext.Provider value={{ productsList }}>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            {/* <Route path="/products/:id" element={<Product/>} /> */}
            <Route path="/products" element={<Products/>} />
            <Route path="/cart" element={<ShoppingCart/>} />
            <Route path="/external-api" element={<ExternalApi/>} />
          </Routes>
        </CartProvider>
      </ProductContext.Provider>
    </AuthProvider>
  );
};

export default App;
