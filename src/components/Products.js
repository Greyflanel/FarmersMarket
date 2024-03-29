import React, { useState, useEffect, useContext } from "react";
import ProductContext from "../Contexts/ProductContext";
import { productList } from "./server.js";
import { NavLink } from "react-router-dom";
import "../styles/product_list.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import axios from "axios";
import ks from "../assets/ks.png";
gsap.registerPlugin(ScrollTrigger);

const Products = (props) => {
  const [prod, setProd] = useState([]);
  
  useEffect(() => {
    axios
      .get("https://api.computerspartselectronics.com/products")
      .then((response) => {
        setProd(response.data);
      })
      .catch((error) => {
        console.log({ error });
      });
  }, [setProd]);

  return (
    <section className="container">
      <div className="product-container">
        {prod
          .map((product) => (
            <div key={product.product}>
              <NavLink to={`/products/${product.id}`} className="card">
                <div className="items">
                  <img
                    className="product-list-image"
                    src={ks}
                    alt={product.product}
                  />
                </div>
                <div className="product-name">
                  <h2>{product.product}</h2>
                  <h3>${product.price}</h3>
                </div>
                <div className="product-details">
                  <p>{product.desc}</p>
                </div>
              </NavLink>
            </div>
          ))}
      
      </div>
    </section>
  );
};

export default Products;
