import React, { useContext } from "react";

import ProductContext from "../Contexts/ProductContext";
import { NavLink } from "react-router-dom";
import "../styles/product_list.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const { productsList } = useContext(ProductContext);
  // const {user} = useContext(AuthContext);
  console.log(productsList[0])

  return (
    <section>
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
      <div className="horizontal-scroll">
        {productsList.map((product) => (
          <div>
            <NavLink
              to={`/products/${product.id}`}
              key={product.id}
              className="card"
            >
              <div className="flowers" key={product.id}>
                <div className="circle"></div>
                <img
                  className="product-list-image"
                  src={product.product_image_url}
                  alt={product.product}
                />
              </div>
              <div className="product-name">
                <h2>{product.product}</h2>
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

export default Products;
