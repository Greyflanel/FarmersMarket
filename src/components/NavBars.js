import React, { useState } from "react";
import "../styles/index.css";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../assets/circle-logo.png";
import User from "./User.js";
import {
  NavItem,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const NavBar = () => {
  const [isActive, setIsActive] = useState("false");
  const menuToggle = () => setIsActive(!isActive);
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

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

        <User/>
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
                <DropdownItem
                  id="qsLogoutBtn"
                  onClick={() => logoutWithRedirect()}
                >
                  Log out
                </DropdownItem>
          )}
        
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
            {/* <li>
              <a href="/cart">Cart</a>
            </li> */}
            <li>
              <a href="/external-api">Cart</a>
            </li>
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

export default NavBar;
