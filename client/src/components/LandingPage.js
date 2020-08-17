import React, {useContext} from 'react';
import ProductContext from "../Contexts/ProductContext";


const LandingPage = () => {
    const { productsList } = useContext(ProductContext);
    
    return (
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMiwlbl32JBFRaDAiRT_xNTLkelII-MuQJjA&usqp=CAU" />
        <h3>LANDING PAGE</h3>
        {productsList.map((prod) => (
          <div key={prod.id}>{prod.product}</div>
        ))}
      </div>
    );
};

export default LandingPage;
