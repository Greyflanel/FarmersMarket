import React, { useContext } from "react";
import Product from "./Product";
import ProductContext from "../Contexts/ProductContext";


const Products = () => {
  const {productsList} = useContext(ProductContext);
  
  return (
    <div className="product-container">
      <h2>Produce List</h2>
      <div className="list-wrapper">
        {productsList.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
