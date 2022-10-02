import React, { useState, useEffect, useContext } from "react";
import { useMemo } from "react";
import Loading from "./Loading.js";
import { useAxios } from "./useAxios.js";
import { NavLink } from "react-router-dom";
import "../styles/product_list.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Products = (props) => {
  const { data, error, loaded } = useAxios("/products", "GET", {});

  if (loaded) {
    return error ? (
      <span>Error: {error}</span>
    ) : (
      <section className="container">
      <div className="product-container">
        {data.map((product) => (
          <div key={product.product}>
            <NavLink to={`/products/${product.id}`} className="card">
              <div className="items">
                <img
                  className="product-list-image"
                  src={product.image}
                  alt={product.product}
                />
              </div>
              <div className="product-name">
                <h2>{product.product}</h2>
                <h3>${product.price}</h3>
              </div>
              <div className="product-details">
                <p>{product.product_details}</p>
              </div>
            </NavLink>
          </div>
        ))}
            
      </div>
      
    </section>
    );
  }
  return <Loading/>;
};

export default Products;
