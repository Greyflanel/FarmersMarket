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
    <div>
          <h1>Products List</h1>
          {products.map(product => (
              <div key={product.id}>
                  <h6>{product.name}</h6>
              </div>
          ))}
    </div>
  );
};

export default ProductsList;
