import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductsList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = () => {
            axios.get('http://localhost:5000')
                .then(response => {
                    setProducts(response.data);
                })
                .catch(error => {
                    console.error('Server Error', error);
                });
        }
        getProducts();
    }, []
    );
  
    return (
        <>
            <h1>Products List</h1>
    <div className="product-wrapper">
          {products.map(product => (
              <div key={product.id}>
                  <h6>{product.name}</h6>
                  <img src={product.image} alt=""/>
              </div>
          ))}
        </div>
        </>
  );
};

export default ProductsList;
