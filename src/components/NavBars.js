import React, { useState } from 'react';
import "../styles/index.css";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink as RouterNavLink } from "react-router-dom";
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";


const NavBar = () => {
const [isActive, setIsActive] = useState("false");
const menuToggle = () => setIsActive(!isActive);
const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

const logoutWithRedirect = () =>
  logout({
    returnTo: window.location.origin,
  });

    return (
      <div>
        <header>
          <h2>Logo</h2>
          <div >
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
              <UncontrolledDropdown nav inNavbar>
                <DropdownMenu>
                  <DropdownItem
                    id="qsLogoutBtn"
                    onClick={() => logoutWithRedirect()}
                  >
                    Log out
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            )}
          </div>
        </header>

        <nav className={isActive ? "" : "nav.active"}>
          <div id="nav-icon3">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={isActive ? "menu" : "menu.active"}>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/products">Shop</a>
              </li>
              <li>
                <a href="/cart">Cart</a>
              </li>
              <li>
                <a href="/external-api">API</a>
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