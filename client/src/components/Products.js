import React, { useContext } from "react";
import Product from "./Product";
import ProductContext from "../Contexts/ProductContext";
import { NavLink } from "react-router-dom";


const Products = () => {
  const {productsList} = useContext(ProductContext);
  
  return (
    <div className="product-container">
      <h2>Produce List</h2>
      <div className="list-wrapper">
        {productsList.map(product => (
          <NavLink to={`/products/${product.id}`}key={product.id}>
          <Product product={product}  />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Products;
