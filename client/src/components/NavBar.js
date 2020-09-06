import React from 'react';
import { NavLink } from 'react-router-dom';
import farmdesign from "../assets/farmdesign.png";
import shoppingCart from "../assets/cart2.svg";

const NavBar = () => {

    return (
      <>
        <div className="navbar">
          <h1 className="hydro-h1">HYDROPONIC</h1>
          <h1>FARMERS MARKET</h1>
          <NavLink className="nav-links" to="/products">
            PRODUCTS
          </NavLink>
          <NavLink className="nav-links" to="/">
            HOME
          </NavLink>
          <NavLink className="nav-links" to="/authorize">
            LOGIN
          </NavLink>
          <NavLink className="nav-links" to="/admin">
            ADMIN
          </NavLink>
          <NavLink to="/cart" className="shopping-cart-icon">
            <img src={shoppingCart} alt="shopping cart icon" />
          </NavLink>

          {/* <img src={farmdesign} alt="farming logo with fruits and vegetables" /> */}
        </div>
      </>
    );
};

export default NavBar;