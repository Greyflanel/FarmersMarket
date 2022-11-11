import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SingleProduct from "./SingleProduct";
;

const Product = (props) => {
  const [singleProduct, setSingleProduct] = useState({});
  const { id } = useParams();
  
  useEffect(() => {
    axios
      .get(`https://api.computerspartselectronics.com/products/${id}`)
      .then((response) => {
        setSingleProduct(response.data);
      })
      .catch((error) => {
        console.log({ error });
      });
  }, [id])
  
  return (
    <div className="single-card">
     
      <SingleProduct singleProduct={singleProduct} />
      
    </div>
  );
  
};

export default Product;

