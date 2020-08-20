import React, {useContext} from 'react';
import ProductContext from "../Contexts/ProductContext";
import farm from "../assets/small.png"
import organic from "../assets/100organic.png";



const LandingPage = () => {
    const { productsList } = useContext(ProductContext);
    
    return (
      <div className="small-farm">
        <h3>LANDING PAGE</h3>
        <img src={farm} alt="organic farm sign with red barn  " />
        <img src={organic} alt="100% organic sign" />
      </div>
    );
};

export default LandingPage;
