import React from 'react';
import { NavLink } from 'react-router-dom';
import farmdesign from "../assets/farmdesign.png";
import shoppingCart from "../assets/cart2.svg";

const NavBar = () => {

    return (
      <>
        <div className="navbar">
          <h1>HYDROPONIC FARMERS MARKET</h1>
          <NavLink to="/products">PRODUCTS</NavLink>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/authorize">LOGIN</NavLink>
          <NavLink to="/admin">ADMIN</NavLink>
          <NavLink to="/cart" className="shopping-cart-icon"><img src={shoppingCart} alt="shopping cart icon"/></NavLink>
          

          {/* <img src={farmdesign} alt="farming logo with fruits and vegetables" /> */}
          
        </div>
      </>
    );
};

export default NavBar;