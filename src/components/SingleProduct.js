import React, {useContext} from "react";
import { CartContext } from "../Contexts/CartContext.js";
import Loading from "./Loading.js";

const SingleProduct = (props) => {

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
        <div className="singleCard">
          <h2>{product}</h2>
          <img className="cartItem" src={product_image_url} alt={product} />
          <h3>Price: ${price}</h3>
          <br />
          <button className="add-to-cart-btn" onClick={addItem}>
            Add to Cart
          </button>
        </div>
        <div className="single-product-details">
          <h2 className="details-h2">Product Details</h2>
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

