import React from "react";

const Product = (props) => {
  return (
    <div className="card">
      <h3>{props.product.product}</h3>
      <img src={props.product.product_image_url} alt={props.product.product} />
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
