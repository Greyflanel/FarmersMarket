import React, { useState, useContext } from "react";
import "../styles/index.css";
import cartIcon from "../assets/cart.png";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../assets/Lion-Logo-Text7.png";
import User from "./User.js";
import { CartContext } from "../Contexts/CartContext.js";


import {
  NavItem,
  DropdownItem,
} from "reactstrap";

const Header = () => {
  const [isActive, setIsActive] = useState("false");
  const menuToggle = () => setIsActive(!isActive);
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [cart] = useContext(CartContext);
  console.log(cart)
  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });
    
  return (
    <div>
      <header>
        <div className="logo-wrapper">
          <img src={logo} alt="Sharif logo" className="logo" />
        </div>

        <User />
        {!isAuthenticated && (
          <NavItem>
            <button
              id="qsLoginBtn"
              color="primary"
              className="btn-margin"
              onClick={() => loginWithRedirect()}
            >
              Log in
            </button>
          </NavItem>
        )}
        {isAuthenticated && (
          <DropdownItem id="qsLogoutBtn" onClick={() => logoutWithRedirect()}>
            Log out
          </DropdownItem>
        )}
        <div className="cart_link">
          <span
            className="cart-item-count"
            style={{ visibility: cart.length > 0 ? "visible" : "hidden" }}
          >
            {cart.length > 0 ? cart.length : null}
          </span>
          <a href="/cart">
            <img src={cartIcon} alt="shopping cart icon" />
          </a>
        </div>
      </header>
      <nav className={isActive ? "" : "nav.active"}>
        <div className={isActive ? "menu" : "menu.active"}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">Shop</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            {/* <li>
              <a href="/external-api">Cart</a>
            </li> */}
          </ul>
        </div>
        <button
          className={isActive ? "toggle" : "active"}
          onClick={menuToggle}
        ></button>
      </nav>
    </div>
  );
};

export default Header;
