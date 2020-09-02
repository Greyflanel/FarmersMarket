import React from 'react';

import farm from "../assets/small.png"
import organic from "../assets/100organic.png";



const LandingPage = () => {
    
    return (
      <div className="small-farm">
        <h3>LANDING PAGE</h3>
        <img src={farm} alt="organic farm sign with red barn  " />
        <img src={organic} alt="100% organic sign" />
      </div>
    );
};

export default LandingPage;
