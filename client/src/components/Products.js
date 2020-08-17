import React, { useContext } from "react";
import Product from "./Product";
import ProductContext from "../Contexts/ProductContext";
import {Context} from "../Store";

const Products = () => {
  const {productsList} = useContext(ProductContext);
  
  return (
    <>
      <h1>Produce List</h1>
      <div className="list-wrapper">
        
        {productsList.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default Products;
