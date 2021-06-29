import React from 'react';
import { NavLink } from 'react-router-dom';
import farmdesign from "../assets/hydro-logos.png";
import shoppingCart from "../assets/cart2.svg";

const NavBar = () => {

    return (
      <>
        <div className="navbar">
          {/* <h1 className="hydro-h1">HYDROPONIC</h1> */}
          <div className="nav-container">
            <h1 className="hydro-h1" id="simple_arc">
              <span className="w0">H</span>
              <span className="w1">Y</span>
              <span className="w2">D</span>
              <span className="w3">R</span>
              <span className="w4">O</span>
              <span className="w5">P</span>
              <span className="w6">O</span>
              <span className="w7">N</span>
              <span className="w8">I</span>
              <span className="w9">C</span>
            </h1>
          </div>
          <figure className="circle"></figure>
          <h1>FARMERS MARKET</h1>
          <NavLink className="nav-links" to="/products">
            PRODUCTS
          </NavLink>
          <NavLink className="nav-links" to="/">
            HOME
          </NavLink>

          {/* <NavLink className="nav-links" to="/admin">
            ADMIN
          </NavLink> */}
          <NavLink to="/cart" className="shopping-cart-icon">
            <img src={shoppingCart} alt="shopping cart icon" />
          </NavLink>
          {/* <NavLink className="login-button" to="/authorize">
          LOGIN
        </NavLink> */}

          {/* <img src={farmdesign} alt="farming logo with fruits and vegetables" /> */}
        </div>
        
      </>
    );
};

export default NavBar;