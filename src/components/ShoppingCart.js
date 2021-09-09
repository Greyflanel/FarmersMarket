import React, { useContext } from 'react';
import { CartContext } from '../Contexts/CartContext';
import ShoppingCartItem from './ShoppingCartItem';

export const ShoppingCart = () => {
    
    const  [cart, setCart] = useContext(CartContext);
    
    
    const totalPrice = cart.reduce((acc, curr) => (parseFloat(acc) + parseFloat(curr.price)), 0 ).toFixed(2);
    
    return (
      <div className="shopping-cart">
        {cart.map((cart) => (
          <ShoppingCartItem key={cart.product} {...cart} />
        ))}
        <div className="shopping-cart-checkout">
          <p>{cart.length} item(s) in your Cart</p>
          <p>Total: ${totalPrice}</p>
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    );

};
