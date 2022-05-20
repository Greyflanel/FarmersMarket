import React, { useState} from 'react'
import { productList } from "./server.js";
import Carousel from 'react-elastic-carousel';

const FeaturedProduct = () => {
  const [ prod, setProd ] = useState(productList);
  return (
    <Carousel>
      {prod.map(item => <div key={item.id}>
        <h1>{item.name}</h1>
      </div> )}
    </Carousel>
  )
}

export default FeaturedProduct;