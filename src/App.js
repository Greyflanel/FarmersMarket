import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { productList } from "./components/server.js";
import LandingPage from "./components/LandingPage.js";
import Products from "./components/Products";
import { ShoppingCart } from "./components/ShoppingCart.js";
import NavBar from "./components/NavBars";
import ProductContext from "./Contexts/ProductContext.js";
import {AuthProvider} from "./Contexts/AuthContext.js";
import { CartProvider } from "./Contexts/CartContext.js";
import Product from "./components/Product.js";
import ExternalApi from "./ExternalApi.js";
import { loadStripe } from "@stripe/stripe-js";
import Payment from "./components/Payment.js";
import Completion from "./components/Completion.js";

const App = () => {
  
  const {productsList, setProductsList} = useState(productList);
  const [stripePromise, setStripePromise] = useState(null);

  useEffect(() => {
    fetch("/config").then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
      
    });
  }, []);
  return (
    <AuthProvider>
      <ProductContext.Provider value={{ productsList }}>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/products" element={<Products />} />
            <Route path="/external-api" element={<ExternalApi />} />
            <Route
              path="/"
              element={<Payment stripePromise={stripePromise} />}
            />
            <Route
              path="/completion"
              element={<Completion stripePromise={stripePromise} />}
            />
          </Routes>
        </CartProvider>
      </ProductContext.Provider>
    </AuthProvider>
  );
};

export default App;
