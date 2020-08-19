import React, {useContext} from 'react';
import ProductContext from "../Contexts/ProductContext";
import farm from "../assets/small.png"

const LandingPage = () => {
    const { productsList } = useContext(ProductContext);
    
    return (
      <div className="small-farm">
        
        <h3>LANDING PAGE</h3>
       <img src={farm} />
      </div>
    );
};

export default LandingPage;
