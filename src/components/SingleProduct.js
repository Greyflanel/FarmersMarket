import React, {useContext, useEffect} from "react";
import { CartContext } from "../Contexts/CartContext.js";
import Loading from "./Loading.js";

const SingleProduct = (props) => {

  useEffect(() => {
//Movement Animation to happen
  const card = document.querySelector(".singleCard");
  
  //Items
  const title = document.querySelector(".product");
  const sneaker = document.querySelector(".sneaker img");
  const purchase = document.querySelector(".purchase");
  const description = document.querySelector(".info h3");
  const sizes = document.querySelector(".sizes");
    while(card != null) {
      //Moving Animation Event
  card.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });
  //Animate In
  card.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    //Popout
    title.style.transform = "translateZ(130px)";
    sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
    description.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(75px)";
  });
  //Animate Out
  card.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
  });
    }
 
  }, [])

  

  const [cart, setCart] = useContext(CartContext);

  if (props.singleProduct.length > 0) {
    const { product, product_image_url, price } = props.singleProduct[0];
    const addItem = () => {
      const cartItem = {
        product: props.singleProduct[0].product,
        price: props.singleProduct[0].price,
        product_image_url: props.singleProduct[0].product_image_url,
      };
      const noDuplicates = cart.filter((item) => item.product !== product || item.product === product);
      setCart([...noDuplicates, cartItem]);
    };

    return (
      <div className="single-product-container">
        <div className="single-product-details">
          <h2 className="details-h2">Product Details</h2>
        </div>
        <div className="singleCard">
          <h2>{product}</h2>
          <img className="cartItem" src={product_image_url} alt={product} />
          <h3>Price: ${price}</h3>
          <br />
          <button className="add-to-cart-btn" onClick={addItem}>
            Add to Cart
          </button>
        </div>
        <button
          onClick={() => (window.location.href = "/products")}
          className="back-to-product-list-btn"
        >
          Back
        </button>
      </div>
    );
  }

  return (
    <div>
     <Loading/>
    </div>
  );
};

export default SingleProduct;

