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
  console.log(productsList)

  return (
    <section>
      <div className="circle1">
        <div className="product-container">
          {productsList.map((product) => (
            <div key={product.name}>
              <NavLink to={`/products/${product.id}`} className="card">
                <div className="items">
                  <div className="circle"></div>
                  <img
                    className="product-list-image"
                    src={product.image}
                    alt={product.name}
                  />
                </div>
                <div className="product-name">
                  <h2>{product.name}</h2>
                </div>
                {/* <div className="product-details">
                <p>{product.product_details}</p>
              </div> */}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
