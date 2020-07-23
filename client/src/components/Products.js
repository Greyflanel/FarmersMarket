import React, { useContext } from "react";
import Product from "./Product";
import ProductContext from "../Contexts/ProductContext";

const Products = () => {
  const {productsList} = useContext(ProductContext);
  
  return (
    <>
      <div className="list-wrapper">
        <h1>Products List</h1>
        {productsList.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default Products;
