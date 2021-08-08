import React, { useEffect, useContext } from "react";
import ProductContext from "../Contexts/ProductContext";
import { NavLink } from "react-router-dom";
import "../styles/product_list.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const { productsList } = useContext(ProductContext);

  useEffect(() => {
    const mouseWheel = document.querySelector(".horizontal-scroll");

    mouseWheel.addEventListener("wheel", function (e) {
      const scroll = 100; // How many pixels to scroll

      if (e.deltaY > 0)
        // Scroll right
        mouseWheel.scrollLeft += scroll;
      // Scroll left
      else mouseWheel.scrollLeft -= scroll;
      e.preventDefault();
    });
  }, []);

  return (
    <section>
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
      <div className="horizontal-scroll">
        {productsList.map((product) => (
          <NavLink
            to={`/products/${product.id}`}
            key={product.id}
            className="card"
          >
            <div className="flowers">
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
        ))}
      </div>
    </section>
  );
};

export default Products;
