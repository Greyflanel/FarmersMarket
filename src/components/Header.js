import React, { useState } from "react";
import "../styles/index.css";
import { useAuth0 } from "@auth0/auth0-react";
<<<<<<< HEAD:src/components/NavBars.js
// import logo from "../assets/cartoon-lion-logo2.png";
=======
import logo from "../assets/NEWLOGO6000.png";
>>>>>>> 917cf8d30cfbdadc551b6316c3c35ed3c043e9d2:src/components/Header.js
import User from "./User.js";
import {
  NavItem,
  DropdownItem,
} from "reactstrap";

const Header = () => {
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
        {/* <div className="logo-wrapper">
          <img src={logo} alt="Sharif logo" className="logo" />
<<<<<<< HEAD:src/components/NavBars.js
          
        </div> */}

=======
        </div>
>>>>>>> 917cf8d30cfbdadc551b6316c3c35ed3c043e9d2:src/components/Header.js
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

export default Header;
