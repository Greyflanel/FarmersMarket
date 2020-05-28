import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = () => {
      axios
        .get("http://localhost:5000")
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.error("Server Error", error);
        });
    };
    getProducts();
  }, []);

  return (
    <>
      <div className="list-wrapper">
        <h1>Products List</h1>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default Products;
