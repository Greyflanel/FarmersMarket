import React, { useContext } from "react";
import ProductContext from "../Contexts/ProductContext";
import { NavLink } from "react-router-dom";



const Products = () => {
  const {productsList} = useContext(ProductContext);
  
  return (
    <div className="product-container">
      <h2>Produce List</h2>
      <div className="list-wrapper">
        {productsList.map((product) => (
          <NavLink
            to={`/products/${product.id}`}
            key={product.id}
            className="card"
          >
            <h3>{product.product}</h3>
            <img src={product.product_image_url} alt={product.product} />
            <h3>Price: $ {product.price}</h3>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Products;