import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../Contexts/CartContext.js";
import ShoppingCartItem from "./ShoppingCartItem.js";
import CheckoutForm from "../components/CheckoutForm.js";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_jeQ7448CGihtpeuK8t7VPzYj00WRgJLHT6");
const ShoppingCart = () => {
  const [cart] = useContext(CartContext);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:4000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cart),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [cart]);


  const totalPrice = cart
    .reduce((acc, curr) => parseFloat(acc) + parseFloat(curr.price), 0)
    .toFixed(2);
  const appearance = {
    theme: "stripe",

    variables: {
      // colorText: '#ffffff',
      // colorTextSecondary: 'black',
      // colorTextPlaceholder: 'black',
      colorText: 'red'
     
      
    },
  };
  const options = {
    clientSecret,
    appearance,
  };
  
  const [showCart, setShowCart] = useState(false);
  const [showButton, setShowButton] = useState(true);
  return (
    <div className="shopping-cart">
      {showCart ? (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      ) : (
        cart.map((cart) => <ShoppingCartItem key={cart.product} {...cart} />)
      )}
      <div className="shopping-cart-checkout">
        <p>{cart.length} item(s) in your Cart</p>
        <p>Total: ${totalPrice}</p>
        {showButton ? (
          <button
            onClick={() => {
              setShowCart(true);
              setShowButton(false);
            }}
            className="checkout-btn"
          >
            Checkout
          </button>
        ) : (
          cart.map((cart) => <ShoppingCartItem key={cart.product} {...cart} />)
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
