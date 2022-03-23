import React, { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import ShoppingCartItem from "./ShoppingCartItem";
import Svg from "../components/Svg.js";

export const ShoppingCart = () => {
  const [cart] = useContext(CartContext);

  const totalPrice = cart
    .reduce((acc, curr) => parseFloat(acc) + parseFloat(curr.price), 0)
    .toFixed(2);

  return (
    <div className="shopping-cart">
      {cart.map((cart) => (
        <ShoppingCartItem key={cart.product} {...cart} />
      ))}
      <div className="shopping-cart-checkout">
        <Svg />
        <p>{cart.length} item(s) in your Cart</p>
        <p>Total: ${totalPrice}</p>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
};
