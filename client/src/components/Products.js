import React, { useEffect, useContext, useRef } from "react";
import ProductContext from "../Contexts/ProductContext";
import { NavLink } from "react-router-dom";
import "../styles/product_list.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const {productsList} = useContext(ProductContext);
  
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
    <section >
      <div className="horizontal-scroll">
        {productsList.map((product) => (
          <NavLink
            to={`/products/${product.id}`}
            key={product.id}
            className="card"
          >
            <div className="flowers">
              <div className="circle"></div>
              <img className="product-list-image" src={product.product_image_url} alt={product.product} />
            </div>
            <div className="info">
              <h1 className="title">Adidas</h1>
              <h3>EXCEPTION COMFORT.</h3>
              <div className="sizes">
                <button>39</button> <button>40</button>
                <button className="active"></button> <button>44</button>
              </div>
              <div className="purchase">
                <button></button>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default Products;

