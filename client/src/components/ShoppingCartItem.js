import React from 'react';

const ShoppingCartItem = props => {

    // const removeFromCart = props => {
        
    // }

    return (
        <div className="shopping-cart-item">
            <h2>{props.product}</h2>
            <img src={props.product_image_url} alt={props.product}/>
            <h5>${props.price}</h5>
            <div>
                <button>Remove from Cart</button>
            </div>
        </div>
    );
};

export default ShoppingCartItem