// import React, { useEffect, useState } from "react";
// import { useParams, NavLink } from "react-router-dom";
// import axios from "axios";
// import SingleProduct from "./SingleProduct";
// ;

// const Product = (props) => {
//   const [singleProduct, setSingleProduct] = useState({});
//   const { id } = useParams();
//   console.log(props)
//   useEffect(() => {
//     axios
//       .get(`http://localhost:4000/api/products/${id}`)
//       .then(response => {
//         setSingleProduct(response.data);
//       })
//       .catch(error => {
//       console.log({error})
//     })
//   }, [id])
  
//   return (
//     <div className="single-card">
     
//       <SingleProduct singleProduct={singleProduct} />
//       <button className="product-back-button"><NavLink to="/products">Back</NavLink></button>
//     </div>
//   );
  
// };

// export default Product;

