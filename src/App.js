import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage.js";
import Products from "./components/Products";
import Header from "./components/Header";
import { AuthProvider } from "./Contexts/AuthContext.js";
import { CartProvider } from "./Contexts/CartContext.js";
import Product from "./components/Product.js";
import ExternalApi from "./ExternalApi.js";
import { loadStripe } from "@stripe/stripe-js";
import Payment from "./components/Payment.js";
import Completion from "./components/Completion.js";

const App = () => {
  const [stripePromise, setStripePromise] = useState(null);

  useEffect(() => {
    fetch("/config").then(async (res) => {
      const { publishableKey } = await res.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);
  return (
    <AuthProvider>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<ExternalApi />} />
          <Route path="/" element={<Payment stripePromise={stripePromise} />} />
          <Route
            path="/completion"
            element={<Completion stripePromise={stripePromise} />}
          />
        </Routes>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
