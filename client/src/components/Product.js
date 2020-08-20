import React from "react";
import styled from "styled-components";

const Product = (props) => {
  return (
    <div className="card">
      <h3>{props.product.product}</h3>
      <img src={props.product.product_image_url} alt={props.product.product} />
      <h3>Price: $ {props.product.price}</h3>
      
    </div>
  );
};

export default Product;

