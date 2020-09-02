import React, {useContext} from "react";
import { CartContext } from "../Contexts/CartContext.js";


const SingleProduct = (props) => {
  const [cart, setCart] = useContext(CartContext);
  
  if (props.singleProduct.length > 0) {
    const { product, product_image_url, price  } = props.singleProduct[0];
    const addItem = () => {
    const cartItem = { product: props.singleProduct[0].product,
       price: props.singleProduct[0].price,
        product_image_url: props.singleProduct[0].product_image_url }
    setCart([...cart, cartItem]);
  };
  
    return (
      <div className="product-container">
      <div className="carder">
        <h1>{product}</h1>
        <img src={product_image_url} alt={product_image_url} />
        <h3>PricePerPound: ${price}</h3>
        <button onClick={addItem}>Add to Cart</button>
        <div className="testCircle">Text inside a circle</div>
        
      </div>
      </div>
    );
  } 
  
  
    return (
      <div >
      <h6>Loading....</h6>  
      </div>
    );  

};

export default SingleProduct;