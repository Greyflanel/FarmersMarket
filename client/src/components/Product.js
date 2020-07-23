import React from "react";

const Product = (props) => {
  return (
    <div className="product-wrapper">
      <h3>{props.product.product}</h3>
      <img src={props.product.product_image_url} alt={props.product.product} />
      
    </div>
  );
};

export default Product;
