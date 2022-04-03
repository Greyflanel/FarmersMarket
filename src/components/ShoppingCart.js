import React, { useContext, useState } from "react";
import { CartContext } from "../Contexts/CartContext.js";
import ShoppingCartItem from "./ShoppingCartItem.js";
import StripeContainer from "../components/StripeContainer.js";

export const ShoppingCart = () => {
  const [cart] = useContext(CartContext);

  const totalPrice = cart
    .reduce((acc, curr) => parseFloat(acc) + parseFloat(curr.price), 0)
    .toFixed(2);
  const [showCart, setShowCart] = useState(false);
  const [showButton, setShowButton] = useState(false);
  return (
    <div className="shopping-cart">
      {showCart ? <StripeContainer/> : cart.map((cart) => (
        <ShoppingCartItem key={cart.product} {...cart} />
      ))}
      <div className="shopping-cart-checkout">
        <p>{cart.length} item(s) in your Cart</p>
        <p>Total: ${totalPrice}</p>
        {showButton ? <button
          onClick={() => setShowCart(true)}
          className="checkout-btn">Checkout</button> : setShowButton(true)}
        
      </div>
    </div>
  );
};
