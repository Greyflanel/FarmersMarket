import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
    const [cart, setCart] = useState( () => {
      const localData = localStorage.getItem('cart');
      return localData ? JSON.parse(localData) : [];
    });
    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])
  return <CartContext.Provider value={[cart, setCart]}>
            {props.children}
        </CartContext.Provider>;
};

// Creates a new context named CartContext
