import React, { useState} from 'react'
import { productList } from "./server.js";
import Carousel from 'react-elastic-carousel';

const FeaturedProduct = () => {
  const [prod, setProd] = useState(productList);
  console.log(prod)
  return (
    <Carousel className="carousel">
      {prod.map(item => <div className="carousel-items" key={item.id}>
        <h1>{item.name}</h1>
        <img src={item.image} alt="" />
      </div> )}
    </Carousel>
  )
}

export default FeaturedProduct;