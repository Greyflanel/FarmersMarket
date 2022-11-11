import React, { useState, useEffect, } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../styles/product_list.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import axios from "axios";
import ks from "../assets/ks.png";
gsap.registerPlugin(ScrollTrigger);

const Category = (props) => {
  const [prod, setProd] = useState([]);
  const { category } = useParams();
  console.log(category)
  useEffect(() => {
    axios
      .get(`https://api.computerspartselectronics.com/${category}`)
      .then((response) => {
        console.log(response.data)
        setProd(response.data);
      })
      .catch((error) => {
        console.log({ error });
      });
  }, [setProd, category]);

  return (
    <section className="container">
      <div className="product-container">
        {prod.map((product) => (
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
                <p>{product.product_details}</p>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;