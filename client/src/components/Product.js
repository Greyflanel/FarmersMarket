import React from "react";

const Product = (props) => {
  return (
    <div className="product-wrapper">
      <h3>{props.product.name}</h3>
      <img src={props.product.image} alt={props.product.name} />
    </div>
  );
};

export default Product;
