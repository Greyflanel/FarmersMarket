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
              <span class="w0">H</span>
              <span class="w1">Y</span>
              <span class="w2">D</span>
              <span class="w3">R</span>
              <span class="w4">O</span>
              <span class="w5">P</span>
              <span class="w6">O</span>
              <span class="w7">N</span>
              <span class="w8">I</span>
              <span class="w9">C</span>
            </h1>
          </div>
          <figure class="circle"></figure>
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