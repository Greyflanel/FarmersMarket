import React, { useContext}from 'react';
import {CartContext} from '../Contexts/CartContext';

const ShoppingCartItem = props => {
const [cart, setCart] = useContext(CartContext);

    const removeFromCart = () => {
      setCart(cart.filter((item) => item.product !== props.product))
      
    };
    
    return (
        <div className="shopping-cart-item">
            <h2>{props.product}</h2>
            <img src={props.product_image_url} alt={props.product}/>
            <h5>${props.price}</h5>
            <div>
                <button onClick={removeFromCart}>Remove from Cart</button>
            </div>
        </div>
    );
};

export default ShoppingCartItem