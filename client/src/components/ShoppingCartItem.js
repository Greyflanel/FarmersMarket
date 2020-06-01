import React from 'react';

const ShoppingCartItem = props => {
    return (
        <div className="shopping-cart-item">
            <h2>{props.name}</h2>
            <div>
                <button>Remove from Cart</button>
            </div>
        </div>
    );
};

export default ShoppingCartItem