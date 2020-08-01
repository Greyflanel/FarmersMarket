import React, {useContext} from 'react';
import ProductContext from "../Contexts/ProductContext";


const LandingPage = () => {
    const { productsList } = useContext(ProductContext);
    
    return (
      <div>
        
        <h3>LANDING PAGE</h3>
        {productsList.map((prod) => (
            <div key={prod.id}>{prod.product}</div>
        ))}
        
      </div>
    );
};

export default LandingPage;
