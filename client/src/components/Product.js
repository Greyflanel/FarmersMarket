import React, { useContext } from "react";
import ProductContext from "../Contexts/ProductContext";

const Product = () => {
    const prod = useContext(ProductContext);
    console.log({prod})
    return (
        <div>
            <h1>PRODUCT</h1>
            
        </div>
    )
}

export default Product;
