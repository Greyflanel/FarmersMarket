import React from "react";


const SingleProduct = (props) => {

  if (props.singleProduct.length > 0) {
    const { product, product_image_url, price  } = props.singleProduct[0];
    return (
      <div className="product-container">
      <div className="carder">
        <h1>{product}</h1>
        <img src={product_image_url} alt={product_image_url} />
        <h3>PricePerPound: ${price}</h3>
        <div className="testCircle">Text inside a circle.</div>
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