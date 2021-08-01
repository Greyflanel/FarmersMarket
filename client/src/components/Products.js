import React, { useEffect, useContext, useRef } from "react";
import ProductContext from "../Contexts/ProductContext";
import { NavLink } from "react-router-dom";
import "../styles/product_list.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const Products = () => {
  const {productsList} = useContext(ProductContext);
  const boxRef = useRef(null);
  

  useEffect(() => {
    
    
    gsap.to([boxRef.current], {
      x: () =>
      console.log(boxRef.current)
        - (boxRef.current - document.documentElement.clientWidth) + "px",
      ease: "none",
      horizontal: true,
      scrollTrigger: {
        scroller: ".horizontal-scroll",
        trigger: [boxRef.current],
        scrub: 1,
      },
    });
    });
  


  return (
    <section ref={boxRef}>
      <div  className="horizontal-scroll">
        {productsList.map((product) => (
          <NavLink
            to={`/products/${product.id}`}
            key={product.id}
            className="card"
          >
            <div className="flowers">
              <div className="circle"></div>
              <img src={product.product_image_url} alt={product.product} />
            </div>
            <div className="info">
              <h1 className="title">Adidas</h1>
              <h3>EXCEPTION COMFORT.</h3>
              <div className="sizes">
                <button>39</button> <button>40</button>{" "}
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

