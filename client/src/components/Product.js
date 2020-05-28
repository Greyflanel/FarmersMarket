import React, { useContext } from "react";
import ProductContext from "../Contexts/ProductContext";


const Product = (props) => {
    console.log(props)
    return (
      <div className="product-wrapper">
            <h3>{props.product.name}</h3>
            <img src={props.product.image} alt={props.product.name}/>
      </div>
    );
}

export default Product;
