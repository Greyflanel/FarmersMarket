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
      .get(`http://localhost:4000/api/products/${id}`)
      .then(response => {
        setSingleProduct(response.data);
      })
      .catch(error => {
      console.log({error})
    })
  }, [id])
  
  return (
    <div className="farm">
      {/* <img src={organic} alt="100% organic sign" />
      <img src={farm} alt="organic farm sign with red barn  " /> */}
      <SingleProduct singleProduct={singleProduct} />
    </div>
  );
  
};

export default Product;

