import React, { useContext } from 'react';
import { CartContext } from '../Contexts/CartContext';
import ShoppingCartItem from './ShoppingCartItem';

export const ShoppingCart = () => {
    
    const  [cart, setCart] = useContext(CartContext);
    const price = cart.price;
    console.log(cart)
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0, )
    

    return (
        <div className="shopping-cart">
            <p>{cart.length}</p>
            {cart.map(cart => (
                <ShoppingCartItem key={cart.product} {...cart} />
            ))}
            <div className="shopping-cart-checkout">
                <p>Total: ${totalPrice}</p>
                <button>Checkout</button>
            </div>
        </div>
    );

};
